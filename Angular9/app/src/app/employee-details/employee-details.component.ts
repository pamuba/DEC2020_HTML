import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  // templateUrl: './employee-details.component.html',
  template:`
  <h2>Employee Details</h2>
  {{errorMsg}}
  <ul *ngFor="let emp of employees">
    <li>{{emp.id}}:{{emp.name}} {{emp.name}}</li>
  </ul>
`,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public errorMsg = "";
  public employees = []

  constructor(private _ser:EmployeeService) { }

  ngOnInit(): void {
    this._ser.getEmployees()
             .subscribe(data=>this.employees=data, error=>this.errorMsg = error);
  }

}
