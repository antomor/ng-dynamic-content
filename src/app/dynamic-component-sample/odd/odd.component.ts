import { Component, OnInit } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

@Component({
  selector: 'app-odd',
  template: `<div>The ODD number is {{data}}</div>`,
})
export class OddComponent implements DynamicComponent{
  data: number;
}
