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

  private getLayerFromMapView = (jmv: JimuMapView, dataSourceId: string): any => {
    try {
      const layerViews = Object.values((jmv as any)?.jimuLayerViews || {}) as any[]
      for (const layerView of layerViews) {
        if (layerView?.layerDataSourceId === dataSourceId || layerView?.dataSourceId === dataSourceId) {
          return layerView.layer
        }
      }
    } catch {
      /* noop */
    }

    return null
  }

  private resolveConfiguredLayer = async (jmv: JimuMapView, dataSourceId: string): Promise<any> => {
    const fromMapView = this.getLayerFromMapView(jmv, dataSourceId)
    if (fromMapView) return fromMapView

    const existing = DataSourceManager.getInstance().getDataSource(dataSourceId) as FeatureLayerDataSource
    if (existing) return (existing as any).layer || (existing as any).getLayer?.()

    const waited = await this.waitForDataSource(dataSourceId, 2000)
    return waited ? (waited as any).layer || (waited as any).getLayer?.() : null
  }

  private resolveFieldName = (layer: any, configuredName: string): string | null => {
    if (!configuredName) return null

    const directMatch = layer?.fieldsIndex?.get?.(configuredName)
    if (directMatch) return directMatch.name

    const candidates = configuredName.split(/[./]/).filter(Boolean)
    for (let index = candidates.length - 1; index >= 0; index--) {
      const candidate = candidates[index]
      const field = layer?.fieldsIndex?.get?.(candidate)
      if (field) return field.name
    }

    return null
  }

  private buildFormTemplate = (layer: any, layerCfg: any): any => {
    const fieldsCfg: any[] = (layerCfg?.fields as any[]) || []
    if (fieldsCfg.length === 0) return undefined

    const expressionInfos: any[] = []
    const elements: any[] = []
    let hasNonEditable = false
    let hasRequired = false

    for (const f of fieldsCfg) {
      const fieldName = this.resolveFieldName(layer, f?.name)
      if (!fieldName) continue
      if (f?.visible === false) continue

      const element: any = {
        type: 'field',
        fieldName,
        label: (f?.label && String(f.label).trim()) || fieldName
      }

      if (f?.editable === false) {
        element.editableExpression = 'expr_false'
        hasNonEditable = true
      }
      if (f?.required === true) {
        element.requiredExpression = 'expr_true'
        hasRequired = true
      }

      elements.push(element)
    }

    if (elements.length === 0) return undefined

    if (hasNonEditable) {
      expressionInfos.push({ name: 'expr_false', expression: 'false', returnType: 'boolean' })
    }
    if (hasRequired) {
      expressionInfos.push({ name: 'expr_true', expression: 'true', returnType: 'boolean' })
    }

    const formTemplate: any = { elements }
    if (expressionInfos.length > 0) formTemplate.expressionInfos = expressionInfos
    return formTemplate
  }

  private buildLayerInfos = async (jmv: JimuMapView) => {
    const cfgLayers = (this.props.config?.layers as any) || []
    const cfgById = new Map<string, any>()

    try { await (jmv?.view as any)?.when?.() } catch { /* noop */ }

    // Resolve each configured Feature Layer via its data source
    for (const layerCfg of cfgLayers) {
      const uds = layerCfg.useDataSource
      if (!uds?.dataSourceId) continue
      const layer: any = await this.resolveConfiguredLayer(jmv, uds.dataSourceId)
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
        const formTemplate = this.buildFormTemplate(layer, match.layerCfg)
        infos.push({
          layer,
          enabled: true,
          addEnabled: true,
          updateEnabled: true,
          deleteEnabled: true,
          formTemplate
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
