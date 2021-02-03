import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template:`
    <h2>Employee List</h2>
    {{errorMsg}}
    <ul *ngFor="let emp of employees">
      <li>{{emp.name}}</li>
    </ul>
  `,
  // templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = []
  public errorMsg = "";

  constructor(private _ser:EmployeeService) { }

  ngOnInit(): void {
    this._ser.getEmployees()
             .subscribe(data=>this.employees=data,  error=>this.errorMsg = error);
  }

}
