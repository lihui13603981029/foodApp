import { Component, Input, Output, EventEmitter} from '@angular/core';
  
  @Component({
    selector:'super-input',
    templateUrl:'./lh.textInput.component.html',
    styleUrls:['./lh.component.css']
  })

export class LhTextInputComponent  {
  private value:any;

  //外部传入的属性
  @Input() type: string = 'text';
  @Input() name: string = null;
  @Input() placeholder: string = null;
  @Input() minlength: number;
  @Input() maxlength: number;
   
  @Output() onValue = new EventEmitter<any>();

  onKey(event:any) {
    this.onValue.emit(this.value);
    
  }
}