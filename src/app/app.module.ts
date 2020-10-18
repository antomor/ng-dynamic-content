import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerTagDirective } from './dynamic-component-sample/container-tag.directive';
import { DynamicComponentSampleComponent } from './dynamic-component-sample/dynamic-component-sample.component';
import { EvenComponent } from './dynamic-component-sample/even/even.component';
import { OddComponent } from './dynamic-component-sample/odd/odd.component';
import { ProjectionSampleOneComponent } from './projection/projection-sample-one/projection-sample-one.component';
import { ProjectionSampleTwoComponent } from './projection/projection-sample-two/projection-sample-two.component';
import { ProjectionComponent } from './projection/projection.component';
import { DynamicTemplateSampleOneComponent } from './template/dynamic-template-sample-one/dynamic-template-sample-one.component';
import { DynamicTemplateSampleTwoComponent } from './template/dynamic-template-sample-two/dynamic-template-sample-two.component';
import { TemplateComponent } from './template/template.component';
import { TitleComponent } from './title/title.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ProjectionSampleOneComponent,
    ProjectionSampleTwoComponent,
    DynamicTemplateSampleOneComponent,
    DynamicTemplateSampleTwoComponent,
    DynamicComponentSampleComponent,
    ContainerTagDirective,
    EvenComponent,
    OddComponent,
    ProjectionComponent,
    TemplateComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
