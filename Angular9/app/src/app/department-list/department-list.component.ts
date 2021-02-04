import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h2>
      Deparment List
    </h2>
    <ul class="items">
      <li (click)="onSelect(dep)" *ngFor="let dep of departments">
        <span class="badge">{{dep.id}}</span>{{dep.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Node"},
    {"id":3, "name":"Vue"},
    {"id":4, "name":"MongoDB"},
    {"id":5, "name":"BootStrap"}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(dep){
    //navigation has to done in code
    this.router.navigate(['/departments', dep.id]);
  }

}
