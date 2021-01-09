import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})
export class InputElementComponent implements OnInit {

  @Input('elementData') elementData;
  constructor() { }
 
  ngOnInit(): void {
  }

}
