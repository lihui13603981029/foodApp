import { Component, Input } from '@angular/core';

@Component({
    selector:'superInput',
    templateUrl:'./lh.textInput.component.html',
    styleUrls:['./lh.component.css']

})
export class LhTextInputComponent {
   @Input() placeholder:string;
   value:string;

}