import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  firstName = '';
  lastName = '';
  title = 'angular-pipe';
  amount: number = 20;
  birthday= "10-10-2010";
  numArray=['a','b','c','d','e','f','g','h'];
  name='';
  

  
  addName(fname: string, lname: string){
    this.firstName = fname;
    this.lastName= lname;
    this.name = `${this.firstName} ${this.lastName}`;

  } 

  


  


}
