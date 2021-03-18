import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  employees:any[]
  
  constructor() {
    this.employees = [
      {id:"1", name:'Alice'},
      {id:"2", name:'Bill'},
      {id:"3", name:'Mary'},
      {id:"4", name:'Jim'},
      {id:"5", name:'Bob'},
    ]
   }
   getEmployees():void{
     this.employees = [
      {id:"1", name:'Alice'},
      {id:"2", name:'Bill'},
      {id:"3", name:'Mary'},
      {id:"4", name:'Jim'},
      {id:"5", name:'Bob'},
      {id:"6", name:'John'},
    ]
   }

  ngOnInit(): void {
  }

  trackById(index:number, employee:any):string{
    return employee.id
  }
}
