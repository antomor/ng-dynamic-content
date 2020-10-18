import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-template-sample-two',
  templateUrl: './dynamic-template-sample-two.component.html',
})
export class DynamicTemplateSampleTwoComponent {

  condition = false;
  ctx = { conditionFromContext: this.condition };

  conditionChange(condition) {
    this.ctx = {
      conditionFromContext: condition
    };
  }

}
