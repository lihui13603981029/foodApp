import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';
@Component ({
	selector:'hero-detail',
	templateUrl:'./hero-detail.component.html',
	styleUrls:['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input() herodetal: Hero;
	//构造函数
	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}
	
	ngOnInit(): void {
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	    .subscribe(herodetal => this.herodetal = herodetal);
	}
	
	goBack(): void {
	  this.location.back();
	}
	
	
}
