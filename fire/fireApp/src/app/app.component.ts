import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fireApp';

  constructor(public crudservice:CrudService){}

  employee:string;
  employeeName:string;
  employeeAge:number;
  employeeAddress:string;
  message:string;

  CreateRecord(){
    // alert("Form Submitted")
    let Record = {}
    Record['name'] = this.employeeName
    Record['age'] = this.employeeAge
    Record['address'] = this.employeeAddress

    this.crudservice.create_NewEmployee(Record).then(res=>{
      this.employeeName=""
      this.employeeAge=undefined
      this.employeeAddress=""
      console.log(res)
      this.message="Employee Data Saved"
    }).catch(error=>{
      console.log(error)
    })
  }
}
