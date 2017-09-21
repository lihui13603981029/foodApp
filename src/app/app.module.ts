import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent }from './app.component';
import {LhTextInputComponent } from './componentList/lh.textInput.component';
import { RegisterComponent } from './components/app-register/register.component';
import { PasswordComponent } from './components/app-password/password.component';
import { LoginComponent } from   './components/app-login/login.component';
import { DishListComponent } from './components/app-dishList/dish-list.component';

import { AppRoutingModule } from './router/app-routing.module';
import { MyHttpService } from './service/myHttp/myHttp.service';


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
    LoginComponent,
    DishListComponent

   
  ],
  bootstrap: [AppComponent],
  providers:[MyHttpService]
})
export class AppModule { }
