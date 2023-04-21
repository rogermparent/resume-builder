export interface CollectionSchemaField {
  name: string
  type: string
}

export interface StringField extends CollectionSchemaField {
  type: "String"
}

export interface NumberField extends CollectionSchemaField {
  type: "Number"
}

export interface DateField extends CollectionSchemaField {
  type: "Date"
}

export interface StringListField extends CollectionSchemaField {
  type: "StringList"
}

type BaseField = StringField | NumberField | DateField | StringListField

export interface ObjectField extends CollectionSchemaField {
  type: "Object"
  fields: BaseField[]
}

export interface ObjectListField extends CollectionSchemaField {
  type: "ObjectList"
  fields: BaseField[]
}

export interface CollectionSchema<
  F extends CollectionSchemaField = CollectionSchemaField
> {
  name: string
  fields: F[]
}
