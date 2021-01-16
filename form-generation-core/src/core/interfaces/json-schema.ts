export interface IJsonSchemaProperty {
    type: string;
    title: string;
    description: string;
    default: string;
}

export interface IJsonSchema {
    required: Array<string>;
    properties: any;
}