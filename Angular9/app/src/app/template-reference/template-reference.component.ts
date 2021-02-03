import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference',
  // templateUrl: './template-reference.component.html',
  template:`
    <input #myInput type="text" />
    <button (click)="logMessage(myInput.value)">Click</button>
  `,
  styleUrls: ['./template-reference.component.css']
})
export class TemplateReferenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(msg){
    console.log(msg)
  }
}
