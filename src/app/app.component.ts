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

    let firstNameField = new InputElement();
    firstNameField.formGroupOrder = 1;
    firstNameField.guideText = "Please enter your first name";
    firstNameField.label = "First name";
    firstNameField.placeHolderText = "First name goes here";
    firstNameField.required = true;
    firstNameField.value = "";
    this.form.formElements.push(firstNameField);

    let lastNameField = new InputElement();
    lastNameField.formGroupOrder = 1;
    lastNameField.guideText = "Please enter your last name";
    lastNameField.label = "Last name";
    lastNameField.placeHolderText = "Last name goes here";
    lastNameField.required = true;
    lastNameField.value = "";
    this.form.formElements.push(lastNameField);

    let emailField = new InputElement({ 
      formGroupOrder: 1, 
      guideText: "Please enter your email", 
      label: "Email", 
      placeHolderText: "Email", 
      required: true, 
      value: "" 
    });
    this.form.formElements.push(emailField);

  }
}
