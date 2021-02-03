import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  // templateUrl: './interpolation.component.html',
  template:`
    <h2>{{2+2}}</h2>
    <h2>{{'Welcome:'+name}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{getUser()}}</h2>

    <!-- <h2>{{a=2+2}}</h2> -->
    <!-- <h2>{{window.location.href}}</h2> -->
    <h2>{{url}}</h2>
  `,
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  public url = window.location.href;
  public name = "Angular9";
  constructor() { }

  ngOnInit(): void {
  }

  getUser(){
    return "User:Appolo";
  }

}
