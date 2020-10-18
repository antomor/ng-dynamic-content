import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicComponentSampleComponent } from './dynamic-component-sample/dynamic-component-sample.component';
import { ProjectionComponent } from './projection/projection.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: 'projection', component: ProjectionComponent
  },
  {
    path: 'template', component: TemplateComponent
  },
  {
    path: 'dynamic-component', component: DynamicComponentSampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
