
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormMakerComponent } from './form-generation/presentation/form-maker/form-maker.component';
import { InputElementComponent } from './form-generation/presentation/input-element/input-element.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormMakerComponent,
    InputElementComponent
  ],

  imports: [    
    AppRoutingModule, 
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule, 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
