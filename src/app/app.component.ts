import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
 
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  account: string = '账号';
  password: string = "密码";
  results: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  private httpUrl:string =  'http://47.52.21.213:8080/llz/enum/cuisine/list';

  constructor(private http: Http){}

  request():void {
    this.http.get(this.httpUrl).subscribe(data =>{
      console.log(data["_body"]);
    }) 
  }
  //忘记密码
  forgetPassWord():void {
    alert("忘记密码");
  }
  //注册
  recodeUser():void {
    alert("立即注册");
  }
}