import { Component, Input, OnInit } from '@angular/core';
import { InputElement } from '../../core/input-element';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})
export class InputElementComponent implements OnInit {

  @Input('elementData') elementData: InputElement;
  @Input('dataObject') dataObject: any;
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.dataObject);
  }
}
