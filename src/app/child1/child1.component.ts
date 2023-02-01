import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class Child1Component {
  child1 = "ViewEncapsulation.ShadowDom";
  isDisable= false

  onDisableButton(){
    setTimeout(() => {
      this.isDisable= true;
    }, 100);
  }
  
  num: number= 10;
}
