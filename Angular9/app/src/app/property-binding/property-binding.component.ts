import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  // templateUrl: './property-binding.component.html',
  template:`
    <!-- <input id="{{myID}}" type="text" value="Original"> -->
    <!-- <input [id]="myID" type="text" value="Original"> -->
    <input [disabled]="ctrl" id="{{myID}}" type="text" value="Original">
  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public myID = "testID";
  public ctrl = true
  constructor() { }

  ngOnInit(): void {
  }

}
