import { Component, Input, OnInit } from '@angular/core';
import { FormConfig } from '../../core/form-config';

@Component({
  selector: 'app-form-maker',
  templateUrl: './form-maker.component.html',
  styleUrls: ['./form-maker.component.scss']
})
export class FormMakerComponent implements OnInit {

  @Input('formConfig') formConfig: FormConfig;
  @Input('dataObject') dataObject: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.formConfig);
  }
}
