import { Component } from '@angular/core';
import { FormConfig, JsonSchemaService } from 'form-generation-core';
import { InputElement } from 'form-generation-core';
import { MakeFormCommand } from 'form-generation-core/dist/core/services/json-schema-service';
import { getSimpleSchema } from './get-simple-schema';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-generator';
  formConfig: FormConfig;
  testObject: any;

  ngOnInit(){
    this.testObject = {};
    this.testObject.thing1 = "foo";
    this.testObject.thing2 = "bar";

    this.formConfig = new FormConfig();
    this.formConfig.name = "Demo Form 1";

    let input1 = new InputElement();
    input1.label = "Thing 1";
    input1.name = "thing1";
    this.formConfig.formElements.push(input1);

    let input2 = new InputElement();
    input2.label = "Thing 2";
    input2.name = "thing2";
    input2.textArea = true;
    this.formConfig.formElements.push(input2);

  }

  private demo1() {
    let service = new JsonSchemaService();
    let command = new MakeFormCommand(getSimpleSchema());
    let response = service.makeForm(command);
    this.formConfig = response.formConfig;
    this.formConfig.name = "User story form";
  }

  onClick() {
    console.log(this.testObject);
  }
}
