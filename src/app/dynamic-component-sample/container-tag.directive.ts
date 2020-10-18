import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appContainerTag]'
})
export class ContainerTagDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
