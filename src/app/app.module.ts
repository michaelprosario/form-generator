
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormMakerComponent } from './form-generation/presentation/form-maker/form-maker.component';
import { InputElementComponent } from './form-generation/presentation/input-element/input-element.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormMakerComponent,
    InputElementComponent
  ],

  imports: [    
    AppRoutingModule, 
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule, 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
