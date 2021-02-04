import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  // {path:'', component:DepartmentListComponent},
  {path:'', redirectTo:"/departments", pathMatch:'full'},
  {path:'departments', component:DepartmentListComponent},
  {path:"departments/:id", component:DepartmentDetailComponent},
  {path:'employees', component:EmployeesListComponent},
  {path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentDetailComponent, PageNotFoundComponent, DepartmentListComponent, EmployeesListComponent]
