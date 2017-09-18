import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent }from './app.component';
import {LhTextInputComponent } from './componentList/lh.textInput.component';


@NgModule({
  declarations: [
    AppComponent,
    LhTextInputComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
