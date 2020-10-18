import { Component } from '@angular/core';
import { DynamicComponent } from '../dynamic-component';

@Component({
  selector: 'app-even',
  template: `<div>The EVEN number is {{data}}</div>`,
})
export class EvenComponent  implements DynamicComponent {
  data: number;
}
