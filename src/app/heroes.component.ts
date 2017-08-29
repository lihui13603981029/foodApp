//导入组件  或者模块
import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';




//加载页面和样式的 装饰器
@Component({
selector: 'my-heroes', //定义组件的名称
templateUrl: './app.component.html',//加载HTML页面
styleUrls: ['./app.component.css']//加载样式

})


//创建一个类
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
 	heroes: Hero[];
 	constructor(
   		private router: Router,
 		private heroService: HeroService
 	){}
 	
 	getHeroes():void {
 		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
 	}
 	
 	ngOnInit(): void {
 		this.getHeroes();
 	}
 	onSelect(hero: Hero):void {
 		this.selectedHero = hero;
 	}
 	
   	gotoDetail():void {
   		this.router.navigate(['/detail',this.selectedHero.id]);
		console.log(this.selectedHero.id);
   		
   	}
 	
}




