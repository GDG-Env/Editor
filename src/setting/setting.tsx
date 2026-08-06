/** @jsx jsx */
import {
  React, jsx, Immutable,
  DataSourceManager, type UseDataSource,
  DataSourceTypes
} from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'
import {
  DataSourceSelector,
  FieldSelector
} from 'jimu-ui/advanced/data-source-selector'
import { Button, Checkbox, TextInput } from 'jimu-ui'
import defaultMessages from './translations/default'
import { type IMConfig, type EditorLayerConfig, type EditorFieldConfig } from '../config'

const uid = () => Math.random().toString(36).slice(2, 9)

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const t = (id: string) => props.intl.formatMessage({
    id,
    defaultMessage: (defaultMessages as any)[id] || id
  })

  const layers: EditorLayerConfig[] = ((props.config?.layers as any) || []) as EditorLayerConfig[]

  const saveLayers = (next: EditorLayerConfig[]) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set('layers', next as any)
    })
  }

  const onMapSelect = (ids: string[]) => {
    props.onSettingChange({ id: props.id, useMapWidgetIds: ids })
  }

  const addLayer = () => {
    saveLayers([
      ...layers,
      { id: uid(), useDataSource: null as any, fields: [] }
    ])
  }

  const updateLayer = (i: number, patch: Partial<EditorLayerConfig>) => {
    saveLayers(layers.map((l, j) => j === i ? { ...l, ...patch } : l))
  }

  const removeLayer = (i: number) => {
    saveLayers(layers.filter((_, j) => j !== i))
  }

  const updateField = (li: number, fi: number, patch: Partial<EditorFieldConfig>) => {
    const layer = layers[li]
    const nextFields = layer.fields.map((f, j) => j === fi ? { ...f, ...patch } : f)
    updateLayer(li, { fields: nextFields })
  }

  const getLayerLabel = (uds?: UseDataSource): string => {
    if (!uds) return ''
    try {
      const ds = DataSourceManager.getInstance().getDataSource(uds.dataSourceId)
      return ds?.getLabel?.() || uds.dataSourceId
    } catch { return uds.dataSourceId }
  }

  const card: React.CSSProperties = {
    border: '1px solid var(--border, #444)', borderRadius: 4,
    padding: 8, marginBottom: 10
  }
  const lbl: React.CSSProperties = { fontSize: 11, color: '#888', marginBottom: 2, marginTop: 8 }
  const headerRow: React.CSSProperties = { display: 'flex', gap: 4, alignItems: 'center', marginBottom: 4 }
  const fieldRow: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '1fr 70px 70px 70px',
    gap: 6, alignItems: 'center',
    padding: '6px 0',
    borderTop: '1px solid var(--border, #333)'
  }
  const fieldHeader: React.CSSProperties = {
    ...fieldRow,
    fontSize: 10, color: '#aaa', borderTop: 'none', padding: '2px 0'
  }

  const mapIds = props.useMapWidgetIds && props.useMapWidgetIds.length > 0
    ? props.useMapWidgetIds
    : null

  return (
    <div style={{ padding: 8 }}>
      <SettingSection title={t('selectMapWidget')}>
        <SettingRow>
          <MapWidgetSelector
            useMapWidgetIds={props.useMapWidgetIds}
            onSelect={onMapSelect}
          />
        </SettingRow>
      </SettingSection>

      <SettingSection title={t('editableLayers')}>
        {!mapIds && (
          <SettingRow>
            <div style={{ fontSize: 12, color: '#f90' }}>{t('selectMapFirst')}</div>
          </SettingRow>
        )}

        {mapIds && layers.length === 0 && (
          <SettingRow>
            <div style={{ fontSize: 12, color: '#aaa' }}>{t('noLayerHint')}</div>
          </SettingRow>
        )}

        {mapIds && layers.map((layer, li) => (
          <div key={layer.id} style={card}>
            <div style={headerRow}>
              <span style={{ flex: 1, fontWeight: 600, fontSize: 12 }}>
                {t('layerLabel')} {li + 1}{layer.useDataSource ? ` — ${getLayerLabel(layer.useDataSource)}` : ''}
              </span>
              <Button size="sm" type="tertiary" onClick={() => removeLayer(li)}>✕</Button>
            </div>

            <div style={lbl}>{t('chooseLayer')}</div>
            <DataSourceSelector
              types={Immutable([DataSourceTypes.FeatureLayer])}
              useMapWidgetIds={Immutable(mapIds)}
              useDataSources={layer.useDataSource ? Immutable([layer.useDataSource]) : Immutable([])}
              mustUseDataSource
              hideAddDataButton
              hideDataView
              onChange={(arr: any) => {
                const first = arr && arr.length ? arr[0] : null
                const uds = first
                  ? (typeof first.asMutable === 'function' ? first.asMutable({ deep: true }) : first)
                  : null
                updateLayer(li, { useDataSource: uds, fields: [] })
              }}
            />

            {layer.useDataSource && (
              <React.Fragment>
                <div style={lbl}>{t('editableFields')}</div>
                <FieldSelector
                  useDataSources={Immutable([layer.useDataSource])}
                  selectedFields={Immutable(layer.fields.map(f => f.name))}
                  isMultiple
                  onChange={(fields: any) => {
                    const selectedNames: string[] = (fields || []).map((f: any) => f.jimuName || f.name)
                    const existing = new Map(layer.fields.map(f => [f.name, f]))
                    const next: EditorFieldConfig[] = selectedNames.map(name =>
                      existing.get(name) || { name, label: '', visible: true, required: false, editable: true }
                    )
                    updateLayer(li, { fields: next })
                  }}
                />

                {layer.fields.length > 0 && (
                  <div style={{ marginTop: 8 }}>
                    <div style={fieldHeader}>
                      <div>{t('fieldName')}</div>
                      <div style={{ textAlign: 'center' }}>{t('visible')}</div>
                      <div style={{ textAlign: 'center' }}>{t('editable')}</div>
                      <div style={{ textAlign: 'center' }}>{t('required')}</div>
                    </div>
                    {layer.fields.map((f, fi) => (
                      <div key={f.name} style={fieldRow}>
                        <div>
                          <div style={{ fontSize: 12, marginBottom: 2 }}>{f.name}</div>
                          <TextInput
                            size="sm"
                            value={f.label || ''}
                            placeholder={t('optionalLabel')}
                            onChange={e => updateField(li, fi, { label: e.target.value })}
                          />
                        </div>
                        <Checkbox
                          style={{ justifySelf: 'center' }}
                          checked={f.visible}
                          onChange={e => updateField(li, fi, { visible: e.target.checked })}
                        />
                        <Checkbox
                          style={{ justifySelf: 'center' }}
                          checked={f.editable}
                          onChange={e => updateField(li, fi, { editable: e.target.checked })}
                        />
                        <Checkbox
                          style={{ justifySelf: 'center' }}
                          checked={f.required}
                          onChange={e => updateField(li, fi, { required: e.target.checked })}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            )}
          </div>
        ))}

        {mapIds && (
          <SettingRow>
            <Button type="primary" size="sm" style={{ width: '100%' }} onClick={addLayer}>
              + {t('addLayer')}
            </Button>
          </SettingRow>
        )}
      </SettingSection>
    </div>
  )
}

export default Setting
