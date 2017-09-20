import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent }from './app.component';
import {LhTextInputComponent } from './componentList/lh.textInput.component';
import { RegisterComponent } from './components/register.component';
import { PasswordComponent } from './components/password.component';
import { LoginComponent } from   './components/login.component';

import { AppRoutingModule } from './router/app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    LhTextInputComponent,
    RegisterComponent,
    PasswordComponent,
    LoginComponent
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
