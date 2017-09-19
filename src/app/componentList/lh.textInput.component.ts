import { Component, Input } from '@angular/core';

@Component({
    selector:'superInput',
    templateUrl:'./lh.textInput.component.html',
    styleUrls:['./lh.component.css']

})
export class LhTextInputComponent {
    
    _placeholder:string = '';
   @Input() set placeholder(placeholder:string){
        this._placeholder= (placeholder&&placeholder.trim())||'';
   };

   value:string;

}