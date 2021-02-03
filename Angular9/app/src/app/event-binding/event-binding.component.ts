import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-event-binding',
  template:`
    <button (click)="getMessage()">Click</button>
  `,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getMessage(){
    console.log("Button Clicked");
  }

}
