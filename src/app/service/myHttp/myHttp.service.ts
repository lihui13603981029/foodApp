import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class MyHttpService {
    private header = new Headers({'Content-Type': 'application/json'});
    private host: string = "http://47.52.21.213:8080";
    private loginUrl:string =this.host + "/llz/user/signIn";
    private registerUrl: string = "/llz/user/signUp";
    private dishTypeUrl:string = "/llz/enum/cuisine/list";
    private allDishUrl:string = "/llz/dishes/dishesList";
    constructor(
        private http: Http
    ){}
    //登录
    requestLogin(params: object):Promise<any> {
       return  this.http.post(this.loginUrl,params)
                    .toPromise()
                    .then(response => response)
                    .catch(this.handleError);
    }
    //注册
    requestRegister():Promise<any> {
        return   this.http.get(this.registerUrl)
                     .toPromise()
                     .then(response => response)
                     .catch(this.handleError);

    }
    //菜系
    requestDishType():any {
        return    this.http.get(this.dishTypeUrl)
                        .toPromise()
                        .then(response => response)
                        .catch(this.handleError);
    
    }
    //全部菜品
    requestAllDish():Promise<any> {
        return    this.http.get(this.allDishUrl)
                        .toPromise()
                        .then(response => response)
                        .catch(this.handleError);
    }
    //返回错误信息
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


}