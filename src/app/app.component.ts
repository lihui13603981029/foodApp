import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
 
@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  results: string;
  private headers = new Headers({'Content-Type': 'application/json'});
  private httpUrl:string =  'http://47.52.21.213:8080/llz/enum/cuisine/list';

  constructor(private http: Http){}

  request():void {
    this.http.get(this.httpUrl).subscribe(data =>{
      console.log(data["_body"]);
    })
    
  }
}