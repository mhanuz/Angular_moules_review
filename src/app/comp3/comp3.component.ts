import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom


  // ViewEncapsulation.None >> not encapusated (same tag, class or id)
  // Child component can affects parent component style
  // for same level component style: two styles will work  at a time. 
  // it will not create any effect on its child componenthere, comp3 will not create any effects in its child component style 


  // ViewEncapsulation.emulated : encapsulation , parent component style not change it's desine and it will not create any effect on parent component style.

  // ViewEncapsulation.Shadow dom
  

})
export class Comp3Component {
v= "Vue"
}
