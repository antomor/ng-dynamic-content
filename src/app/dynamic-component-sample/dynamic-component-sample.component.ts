import { Component, ComponentFactoryResolver, OnInit, Type, ViewChild } from '@angular/core';
import { ContainerTagDirective } from './container-tag.directive';
import { DynamicComponent } from './dynamic-component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-dynamic-component-sample',
  templateUrl: './dynamic-component-sample.component.html',
  styleUrls: ['./dynamic-component-sample.component.scss',]
})
export class DynamicComponentSampleComponent implements OnInit {

  @ViewChild(ContainerTagDirective, { static: true }) container: ContainerTagDirective;
  components: Type<DynamicComponent>[] = [
    EvenComponent,
    OddComponent
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.newNumber();
  }

  renderComponent(number: number) {
    // get the component to render
    const componentToCreate = this.components[number%2];

    // get the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentToCreate);

    // get the container view in which the component should be created
    const viewContainerRef = this.container.viewContainerRef;
    viewContainerRef.clear();

    // create the component
    const componentRef = viewContainerRef.createComponent<DynamicComponent>(componentFactory);
    // bind data to component
    componentRef.instance.data = number;
  }

  public newNumber() {
    // get random number from 0 to 100
    const rnd = this.getRandomNumber();
    this.renderComponent(rnd);
  }

  private getRandomNumber() {
    const maxRandom = 100;
    const rnd = Math.floor(Math.random() * Math.floor(maxRandom));
    return rnd;
  }
}
