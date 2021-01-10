import { FormConfig } from "../value-objects/form-config";

export class MakeFormCommand
{
  public jsonSchema: any;
}

export class MakeFormResponse
{
  public hasErrors: boolean = false;
  public errors: Array<string> = [];
  public formConfig: FormConfig;
}

export class JsonSchemaService
{
  public makeForm(command: MakeFormCommand) : MakeFormResponse {
    let response = new MakeFormResponse();
    

    return response;
  }
}