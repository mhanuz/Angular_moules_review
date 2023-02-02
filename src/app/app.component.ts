import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentData = '';
  childValue ='' ;
  addParentValue(val: string){
    this.parentData=val;
  }

  childTwoValue(val: string){
    this.childValue=val
  }

}
