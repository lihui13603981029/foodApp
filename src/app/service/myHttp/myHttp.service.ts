import { Injectable }       from '@angular/core';
import { Headers, Http }    from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Dish }             from '../../module/dish';
import { DishType }         from '../../module/dishType';

@Injectable()

export class MyHttpService {
    private header = new Headers({'Content-Type': 'application/json'});
    private host: string = "your host";
    private loginUrl:string =  `${this.host}/llz/user/signIn`;
    private registerUrl: string = `${this.host}/llz/user/signUp`;
    private dishTypeUrl:string =  `${this.host}/llz/enum/cuisine/list`;
    private allDishUrl:string = `${this.host}/llz/dishes/dishesList`;
    private allDishOfTypeUrl: string =  `${this.host}/llz/dishes/dishesListBycuisineId`;
    constructor(
        private http: Http
    ){}
    //登录
    requestLogin(params: object):Promise<any> {
       return  this.http.post(this.loginUrl,params)
                    .toPromise()
                    .then(response => {
                        return response.json();
                    })
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
    requestDishType():Promise<DishType[]> {
        return    this.http.get(this.dishTypeUrl)
                        .toPromise()
                        .then(response =>response.json())
                        .catch(this.handleError);
    
    }
    //全部菜品
    requestAllDish():Promise<Dish[]> {
        return    this.http.get(this.allDishUrl)
                        .toPromise()
                        .then(response => response.json())
                        .catch(this.handleError);
    }
    //获取制定类型的菜品
    requestDishOfType(id: string):Promise<Dish[]> {
        const url = `${this.allDishOfTypeUrl}/${id}`;
        return this.http.get(url)
                    .toPromise()
                    .then(response => {
                     return   response.json()
                    })
                    .catch(this.handleError);
    }
    //返回错误信息
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


}