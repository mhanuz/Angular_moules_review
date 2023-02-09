import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'view-enc-v1';
}

// ViewEncapsulation is a css style encapsulation policy that makes a component more independent. 
// hide the structure, style and behavior from other parts of the code.