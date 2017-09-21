import { Component,Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MyHttpService } from '../../service/myHttp/myHttp.service';



@Component({
selector:'app-register',
templateUrl:'./register.component.html',
styleUrls:['./register.component.css']
})

export class RegisterComponent {
    constructor(
        private location: Location,
        private router: Router,
        private httpService: MyHttpService
      
    ){}
    private data:any ;
    registFoodApp(): void {
        this.data =   this.httpService.requestRegister();
        console.log(this.data);
    //    this.router.navigate(['login']);
    }
    back(): void{
        this.location.back(); 
    }
}