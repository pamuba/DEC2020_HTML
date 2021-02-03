import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  // templateUrl: './two-way.component.html',
  template:`
    <input [(ngModel)]="name" type="text" />
    {{name}}
  `,
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  public name="";
  constructor() { }

  ngOnInit(): void {
  }

}
