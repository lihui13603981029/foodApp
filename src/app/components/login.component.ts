import { Component,Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router }            from '@angular/router';


@Component({
selector:'app-login',
templateUrl:'./login.component.html',
styleUrls:['./login.component.css']
})

export class LoginComponent {
    @Input() userName: string;
    @Input() passWord: string;
  
    results: string;
    private headers = new Headers({'Content-Type': 'application/json'});
    private httpUrl:string =  'http://47.52.21.213:8080/llz/user/signIn';
  
    constructor(
      private http: Http,
      private router: Router
    ){}
  
    loginFoodApp():void {
      this.http.post(this.httpUrl,{password:"123456",username:"17621252538"}).subscribe(data =>{
        console.log(data["_body"]);
      });
    }
    //忘记密码
    forgetPassWord():void {
      this.router.navigate(['/password']);
    }
    //注册
    recodeUser():void {
      
    }
}