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
  testPerson: any;

  ngOnInit(){
    let service = new JsonSchemaService();
    let command = new MakeFormCommand(getSimpleSchema());
    let response = service.makeForm(command);
    this.formConfig = response.formConfig;
    this.formConfig.name = "User story form";
  }

  onClick() {
    console.log(this.testPerson);
  }
}
