import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  // templateUrl: './pipes.component.html',
  template:`
    <!-- <h2>{{name | lowercase }}</h2>
    <h2>{{name | uppercase }}</h2>
    <h2>{{name | titlecase }}</h2>
    <h2>{{name | slice:3:6 }}</h2>

    <h2>{{5.678 | number:'1.2-3' }}</h2>
    <h2>{{5.678 | number:'3.4-5' }}</h2>
    <h2>{{5.678 | number:'1.1-2' }}</h2>

    <h2>{{.25 | percent }}</h2> -->


    <!-- <h2>{{.25 | currency }}</h2>
    <h2>{{.25 | currency:'EUR' }}</h2>
    <h2>{{.25 | currency:'GBP' }}</h2>
    <h2>{{.25 | currency:'INR' }}</h2>
    <h2>{{.25 | currency:'CNY' }}</h2> -->

    <h2>{{date}}</h2>

    <h2>{{date | date:'short' }}</h2>
    <h2>{{date | date:'shortTime' }}</h2>
    <h2>{{date | date:'shortDate' }}</h2>
    <h2>{{date | date:'dd-MM-yyyy' }}</h2>
    <h2>{{date | date:'dd-MMM-yyyy' }}</h2>
    <h2>{{date | date:'dd-MMMM-yyyy' }}</h2>

  `,


  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public name = "john wick"

  public date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
