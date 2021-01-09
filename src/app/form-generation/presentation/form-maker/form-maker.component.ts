import { Component, Input, OnInit } from '@angular/core';
import { Form } from '../../core/form';
import { InputElement } from '../../core/input-element';

@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.scss']
})
export class FormMakerComponent implements OnInit {

  @Input('form') form: Form;

  constructor() { }

  ngOnInit(): void {
    console.log(this.form);
  }

}
