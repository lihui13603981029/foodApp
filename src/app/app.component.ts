import { Component ,Input} from '@angular/core';
import { Headers, Http } from '@angular/http';
 
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  @Input() userName: string;
  @Input() passWord: string;

  results: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  private httpUrl:string =  'http://47.52.21.213:8080/llz/user/signIn';

  constructor(private http: Http){}

  loginFoodApp():void {
    this.http.post(this.httpUrl,{password:"123456",username:"17621252538"}).subscribe(data =>{
      console.log(data["_body"]);
    });
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