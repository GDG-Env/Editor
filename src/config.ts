import { type ImmutableObject } from 'seamless-immutable'
import { type UseDataSource } from 'jimu-core'

export interface EditorFieldConfig {
  name: string
  label?: string
  visible: boolean
  required: boolean
  editable: boolean
}

export interface EditorLayerConfig {
  id: string
  useDataSource: UseDataSource
  fields: EditorFieldConfig[]
}

export interface Config {
  layers: EditorLayerConfig[]
}

export type IMConfig = ImmutableObject<Config>
