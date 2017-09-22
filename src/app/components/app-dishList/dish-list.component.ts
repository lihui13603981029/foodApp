import { Component,OnInit } from '@angular/core';
import { MyHttpService }    from '../../service/myHttp/myHttp.service'
import { Dish }             from '../../module/dish';
import { DishType }         from '../../module/dishType';

@Component({
    selector:'dish-list',
    templateUrl:'./dish-list.component.html',
    styleUrls:['./dish-list.component.css']
})

export class DishListComponent implements OnInit{

    constructor(private httpService: MyHttpService){}

    public dishTypes: Array<DishType> = [];
    public dishs: Array<Dish> = [];
    ngOnInit(){
        this.showDataType();
        this.showAllDish();
    }

    showDataType():void {
        this.httpService.requestDishType().then(data =>{
            this.dishTypes = data;
        });
    }

    showAllDish():void {
        this.httpService.requestAllDish().then(data =>{
            this.dishs = data;
        });
    }
    selectedDishType(id:string): void {
        this.httpService.requestDishOfType(id).then(data => {
            this.dishs = data;
        });
    }

}