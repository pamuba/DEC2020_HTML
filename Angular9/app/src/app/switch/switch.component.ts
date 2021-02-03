import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  // templateUrl: './switch.component.html',
  template:`
    <div [ngSwitch]="color">
      <div [style.color]="color" *ngSwitchCase="'red'">U picked RED</div>
      <div [style.color]="color" *ngSwitchCase="'blue'">U picked BLUE</div>
      <div [style.color]="color" *ngSwitchCase="'green'">U picked GREEN</div>
      <div *ngSwitchDefault>U picked a WORNG COLOR</div>
    </div>
  `,
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  
  public color = "yellow"
  constructor() { }

  ngOnInit(): void {
  }

}
