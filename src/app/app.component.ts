import { Component } from '@angular/core';
import { FormConfig } from './form-generation/core/form-config';
import { InputElement } from './form-generation/core/input-element';

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
    let person: any = {};
    person.firstName = "Michael";
    person.lastName = "Peter";
    person.email = "michael@here.com";
    this.testPerson = person;
    
    this.formConfig = new FormConfig();
    this.formConfig.description = "This is a test form";
    this.formConfig.name = "My test form";

    let things = "firstName|lastName|email"
    let thingsList = things.split('|');

    for(var thing of thingsList){
      this.formConfig.formElements.push(new InputElement({ 
        formGroupOrder: 1,                 
        label: thing,         
        required: true, 
        value: "",        
        name: thing 
      }));  
    }
  }

  onClick() {
    console.log(this.testPerson);
  }  
}
