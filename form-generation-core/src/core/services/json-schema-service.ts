import { BaseElement } from "../value-objects/base-element";
import { FormConfig } from "../value-objects/form-config";
import { IJsonSchema, IJsonSchemaProperty } from "../interfaces/json-schema";
import { InputElement } from "../value-objects/input-element";

export class MakeFormCommand {
    public jsonSchema: IJsonSchema;
}

export class MakeFormResponse {
    public hasErrors: boolean = false;
    public errors: Array<string> = [];
    public formConfig: FormConfig;
}

export class JsonSchemaService {
    public makeForm(command: MakeFormCommand): MakeFormResponse {
        let response = new MakeFormResponse();

        let formConfig = new FormConfig();
        formConfig.description = "";
        formConfig.name = "";
        formConfig.formElements = [];

        let i = 0;
        let propertyNames = Object.getOwnPropertyNames(command.jsonSchema.properties);
        for (const propertyName of propertyNames) {
            let property = command.jsonSchema.properties[propertyName] as IJsonSchemaProperty;
            let element;
            if (property.type === "string") {
                element = this.getStringElement(i, propertyName);
            } else if (property.type === "integer") {
                element = this.getIntegerElement(i, propertyName);
            }else{
                throw Error("Type not handled: " + property.type);
            }

            formConfig.formElements.push(element);

            i++;
        }

        response.formConfig = formConfig;

        return response;
    }

    private getIntegerElement(i: number, propertyName: string) {
        let el = new InputElement();
        el.enabled = true;
        el.formGroupOrder = i;
        el.guideText = "";
        el.hidden = false;
        el.inputType = "number";
        el.label = propertyName;
        el.maxLength = 5000;
        el.name = propertyName;
        el.placeHolder = "";
        el.value = "";
        return el;
    }

    private getStringElement(i: number, propertyName: string) {
        let el = new InputElement();
        el.enabled = true;
        el.formGroupOrder = i;
        el.guideText = "";
        el.hidden = false;
        el.inputType = "text";
        el.label = propertyName;
        el.maxLength = 5000;
        el.name = propertyName;
        el.placeHolder = "";
        el.value = "";
        return el;
    }
}