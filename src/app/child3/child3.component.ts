import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css'], 
  encapsulation:ViewEncapsulation.Emulated
})
export class Child3Component {
  child3 = "ViewEncapsulation"
  btn_name="Emulate"
}
