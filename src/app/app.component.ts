import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  firstName: string;
  lastName: string;
  name: string;

  ngOnInit() {
    this.firstName='';
    this.lastName='';
    this.name='';
  }

  addName(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName= lname;
    this.name = `${this.firstName} ${this.lastName}`;
  } 

  


  


}
