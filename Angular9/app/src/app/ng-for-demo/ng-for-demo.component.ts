import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-demo',
  // templateUrl: './ng-for-demo.component.html',
  template:`
    <div *ngFor="let color of colors; even as l">
      <h2 [style.color]="color">{{l}} {{color}}</h2>
    </div>
  `,
  styleUrls: ['./ng-for-demo.component.css']
})
export class NgForDemoComponent implements OnInit {

  public colors = ["red", "blue", "green", "yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
