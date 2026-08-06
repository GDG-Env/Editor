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

  constructor(props) {
    super(props)
    this.state = { jimuMapView: null, currentWidget: null }
  }

  private destroyEditor = () => {
    if (this.state.currentWidget) {
      try { this.state.currentWidget.destroy() } catch { /* noop */ }
    }
  }

  private buildLayerInfos = async (jmv: JimuMapView) => {
    const cfgLayers = (this.props.config?.layers as any) || []
    if (!cfgLayers || cfgLayers.length === 0) return null

    const dsm = DataSourceManager.getInstance()
    const infos: any[] = []

    for (const layerCfg of cfgLayers) {
      const uds = layerCfg.useDataSource
      if (!uds) continue
      try {
        let ds = dsm.getDataSource(uds.dataSourceId) as FeatureLayerDataSource
        if (!ds) {
          ds = await dsm.createDataSourceByUseDataSource(uds) as FeatureLayerDataSource
        }
        const layer: any = (ds as any)?.layer
        if (!layer) continue
        if (typeof layer.load === 'function') {
          try { await layer.load() } catch { /* noop */ }
        }

        const fieldsCfg = (layerCfg.fields || []) as any[]
        const fieldConfig = fieldsCfg.map(f => ({
          name: f.name,
          label: f.label || undefined,
          visible: f.visible !== false,
          editable: f.editable !== false,
          required: !!f.required
        }))

        infos.push({
          layer,
          fieldConfig: fieldConfig.length > 0 ? fieldConfig : undefined
        })
      } catch (err) {
        console.warn('[editor] could not resolve layer', uds, err)
      }
    }
    return infos.length > 0 ? infos : null
  }

  activeViewChangeHandler = async (jmv: JimuMapView) => {
    this.destroyEditor()
    if (!jmv) {
      this.setState({ jimuMapView: null, currentWidget: null })
      return
    }
    this.setState({ jimuMapView: jmv })

    if (!this.myRef.current) {
      console.error('[editor] container ref is not ready')
      return
    }

    const container = document.createElement('div')
    container.style.height = '100%'
    this.myRef.current.innerHTML = ''
    this.myRef.current.appendChild(container)

    const layerInfos = await this.buildLayerInfos(jmv)

    const editorProps: any = { view: jmv.view, container }
    if (layerInfos) editorProps.layerInfos = layerInfos

    const newEditor = new Editor(editorProps)
    this.setState({ currentWidget: newEditor })
  }

  componentDidUpdate(prevProps: AllWidgetProps<IMConfig>) {
    if (this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 0) {
      this.destroyEditor()
      return
    }
    if (prevProps.config !== this.props.config && this.state.jimuMapView) {
      // Rebuild Editor with new layer/field config
      this.activeViewChangeHandler(this.state.jimuMapView)
    }
  }

  componentWillUnmount() {
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
