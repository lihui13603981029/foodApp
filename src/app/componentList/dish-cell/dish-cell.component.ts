import { Component,Input }  from '@angular/core';
import { Dish }             from '../../module/dish';

@Component({
    selector:'dish-cell',
    templateUrl:'./dish-cell.component.html',
    styleUrls:['./dish-cell.component.css']
})

export class DishCellComponent {

    //接受外部数据
    @Input() dish: Dish;
    private imgHost: string = "http://47.52.21.213:8080/images/";
    
}