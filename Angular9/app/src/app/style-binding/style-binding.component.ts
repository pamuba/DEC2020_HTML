import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template:`
  
    <!-- <h2 class="text-special">Style Binding</h2> -->
    <!-- <h2 [class]="successClass">Style Binding</h2> -->
    <!-- Property binding takes precednce -->
    <!-- <h2 class="text-special">Style Binding</h2> -->
    <!-- <h2 [class.font-style]="hasError">Style Binding</h2> -->
    <!-- <h2 [ngClass]="messageClasses">Style Binding</h2> -->
    <!-- <h2 [style.color] = "'orange'" >Style Binding</h2> -->
    <h2 [style.color] = "hasError ? 'red': 'green'" >Style Binding</h2>
    <h2 [style.color] =  "highlight" >Style Binding</h2>

    <h2 [ngStyle] = "titleStyle" >Style Binding</h2>
  `,
  styles:[`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
      /* color:yellow; */
    },
  `]
})
export class StyleBindingComponent implements OnInit {

  public successClass = "text-success"
  public hasError = true;
  public isSpecial = true;
  public highlight = "orange"

  public messageClasses = {
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyle ={
    color:"blue",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
