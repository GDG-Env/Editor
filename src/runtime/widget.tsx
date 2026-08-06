/** @jsx jsx */
import { type AllWidgetProps, jsx, React, DataSourceManager } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView, FeatureLayerDataSource } from 'jimu-arcgis'
import Editor from 'esri/widgets/Editor'
import { type IMConfig } from '../config'

interface State {
  jimuMapView: JimuMapView
  currentWidget: Editor
}

export default class Widget extends React.PureComponent<AllWidgetProps<IMConfig>, State> {
  private myRef = React.createRef<HTMLDivElement>()
  private rebuildToken = 0

  constructor(props) {
    super(props)
    this.state = { jimuMapView: null, currentWidget: null }
  }

  private destroyEditor = () => {
    if (this.state.currentWidget) {
      try { this.state.currentWidget.destroy() } catch { /* noop */ }
    }
  }

  private waitForDataSource = (id: string, timeoutMs = 15000): Promise<FeatureLayerDataSource | null> => {
    const dsm = DataSourceManager.getInstance()
    const existing = dsm.getDataSource(id) as FeatureLayerDataSource
    if (existing) return Promise.resolve(existing)

    return new Promise(resolve => {
      const start = Date.now()
      const timer = setInterval(() => {
        const ds = dsm.getDataSource(id) as FeatureLayerDataSource
        if (ds) {
          clearInterval(timer)
          resolve(ds)
        } else if (Date.now() - start > timeoutMs) {
          clearInterval(timer)
          resolve(null)
        }
      }, 250)
    })
  }

  private buildLayerInfos = async (jmv: JimuMapView) => {
    const cfgLayers = (this.props.config?.layers as any) || []
    const cfgById = new Map<string, any>()

    // Resolve each configured Feature Layer via its data source
    for (const layerCfg of cfgLayers) {
      const uds = layerCfg.useDataSource
      if (!uds?.dataSourceId) continue
      const ds = await this.waitForDataSource(uds.dataSourceId)
      const layer: any = ds ? (ds as any).layer : null
      if (!layer) {
        console.warn('[editor] data source / layer unavailable:', uds.dataSourceId)
        continue
      }
      if (typeof layer.load === 'function') {
        try { await layer.load() } catch { /* noop */ }
      }
      cfgById.set(layer.id, { layer, layerCfg })
    }

    // Walk every editable Feature Layer in the map. Configured ones are enabled
    // with the user's fieldConfig; every other editable layer is explicitly
    // disabled so it does not appear in the Editor UI.
    const infos: any[] = []
    const map: any = jmv?.view?.map
    const allLayers: any[] = map?.allLayers?.toArray?.() || []

    for (const layer of allLayers) {
      if (layer?.type !== 'feature') continue
      const caps = layer?.capabilities?.operations
      const isEditable = !!(caps?.supportsAdd || caps?.supportsUpdate || caps?.supportsDelete)
      if (!isEditable) continue

      const match = cfgById.get(layer.id)
      if (match) {
        const fieldsCfg = (match.layerCfg.fields || []) as any[]
        const fieldConfig = fieldsCfg
          .filter(f => f.visible !== false)
          .map(f => ({
            name: f.name,
            label: f.label || undefined,
            editable: f.editable !== false,
            required: !!f.required
          }))
        infos.push({
          layer,
          enabled: true,
          addEnabled: true,
          updateEnabled: true,
          deleteEnabled: true,
          fieldConfig: fieldConfig.length > 0 ? fieldConfig : undefined
        })
      } else {
        infos.push({ layer, enabled: false })
      }
    }

    return infos.length > 0 ? infos : null
  }

  private createEditor = async () => {
    const token = ++this.rebuildToken
    this.destroyEditor()

    if (!this.state.jimuMapView || !this.myRef.current) return

    const container = document.createElement('div')
    container.style.height = '100%'
    this.myRef.current.innerHTML = ''
    this.myRef.current.appendChild(container)

    const layerInfos = await this.buildLayerInfos(this.state.jimuMapView)
    if (token !== this.rebuildToken) return

    const editorProps: any = { view: this.state.jimuMapView.view, container }
    if (layerInfos) editorProps.layerInfos = layerInfos

    const newEditor = new Editor(editorProps)
    this.setState({ currentWidget: newEditor })
  }

  activeViewChangeHandler = async (jmv: JimuMapView) => {
    this.destroyEditor()
    if (!jmv) {
      this.setState({ jimuMapView: null, currentWidget: null })
      return
    }
    this.setState({ jimuMapView: jmv }, () => { this.createEditor() })
  }

  componentDidUpdate(prevProps: AllWidgetProps<IMConfig>) {
    if (this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 0) {
      this.destroyEditor()
      return
    }
    if (prevProps.config !== this.props.config && this.state.jimuMapView) {
      this.createEditor()
    }
  }

  componentWillUnmount() {
    this.rebuildToken++
    this.destroyEditor()
  }

  render() {
    const mapId = this.props.useMapWidgetIds?.[0]
    return (
      <div
        className="widget-js-api-editor"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <div ref={this.myRef} style={{ flex: 1, minHeight: 0, overflow: 'auto' }} />
        {mapId
          ? (
            <JimuMapViewComponent
              useMapWidgetId={mapId}
              onActiveViewChange={this.activeViewChangeHandler}
            />
            )
          : (
            <p style={{ padding: 8, margin: 0 }}>Please select a map.</p>
            )}
      </div>
    )
  }
}
