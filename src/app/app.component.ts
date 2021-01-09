import { Component } from '@angular/core';
import { Form } from './form-generation/core/form';
import { InputElement } from './form-generation/core/input-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-generator';
  form: Form;

  ngOnInit(){

    this.form = new Form();
    this.form.description = "This is a test form";
    this.form.name = "My test form";

    let things = "firstName|lastName|email|phone|phone2"
    let thingsList = things.split('|');

    for(var thing of thingsList){
      this.form.formElements.push(new InputElement({ 
        formGroupOrder: 1,                 
        label: thing,         
        required: true, 
        value: "",        
        name: thing 
      }));  
    }


  }
}
