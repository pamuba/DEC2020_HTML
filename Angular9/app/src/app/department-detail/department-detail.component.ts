import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h2>You Selected department with id = {{departmentID}}</h2>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentID:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentID = id;
  }

}
