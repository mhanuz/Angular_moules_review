import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  parentData: string;
  childValue: string;

  ngOnInit(){
    this.parentData= '';
    this.childValue= '';
  }
  addParentValue(val: string){
    this.parentData=val;
  }

  childTwoValue(val: string){
    this.childValue=val
  }

}
