import { Component,Input } from '@angular/core';
import { Router }          from '@angular/router';
import { MyHttpService }   from  '../../service/myHttp/myHttp.service';  


@Component({
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls:['./login.component.css']
})

export class LoginComponent {
    userName: string;
    passWord: string;
    results: string;
    
    constructor(
      private router: Router,
      private httpService: MyHttpService
    ){}
  
    loginFoodApp():void {
      
        this.httpService.requestLogin({username: this.userName, password: this.passWord})
            .then(data=>{
            
               if(data.status == 1){
                this.router.navigate(['/dishList']);
               }
                
            });
    }
    //忘记密码
    forgetPassWord():void {
      this.router.navigate(['/password']);
    }
    //注册
    recodeUser():void {
      this.router.navigate(['/register']);
    }

    getUsername(event:any):void {
        this.userName = event;
    }

    getPassword(event:any):void {
      this.passWord = event;
    }
}