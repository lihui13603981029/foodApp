import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../components/app-register/register.component';
import { PasswordComponent } from '../components/app-password/password.component';
import { LoginComponent } from '../components/app-login/login.component';

const routes: Routes = [
    {
        path:'',redirectTo:'/login', pathMatch:'full'
    },{
        path:'login',component: LoginComponent
    },{
        path:'register',component: RegisterComponent
    },{
        path:'password', component: PasswordComponent
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {

}