import { Component }    from '@angular/core';
import { Router }       from '@angular/router';
import { Location } from '@angular/common';

@Component({
selector:'app-password',
templateUrl:'./password.component.html',
styleUrls:['./password.component.css']
})

export class PasswordComponent {

    constructor(
        private router: Router,
        private location: Location
    ) {}
    resetPassWord():void {
    
    }
    back():void {
        this.location.back();
    }

}