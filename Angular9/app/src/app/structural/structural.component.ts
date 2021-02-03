import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  // templateUrl: './structural.component.html',
  template:`
    <!-- <h2 *ngIf="true">Structural Directive</h2> -->

    <!-- <h2 *ngIf="displayName; else elseblock">
      Structural Directive
    </h2>

    <ng-template #elseblock>
     <h2>From Template</h2>
    <ng-template> -->

    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
     <h2>Then Block</h2>
    </ng-template>


    <ng-template #elseBlock>
     <h2>Else Block</h2>
    </ng-template>


  `,
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  displayName = false;
  constructor() { }

  ngOnInit(): void {
  }

}
