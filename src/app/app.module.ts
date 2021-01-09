import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormMakerComponent } from './form-generation/presentation/form-maker/form-maker.component';
import { InputElementComponent } from './form-generation/presentation/input-element/input-element.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMakerComponent,
    InputElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
