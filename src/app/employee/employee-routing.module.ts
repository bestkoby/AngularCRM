import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component'; 
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';

const routes:Routes = [
    {path:'list',component:EmployeelistComponent},
    {path:'add',component:EmployeeCreateComponent}, 
    { path: 'edit', component: EmployeeEditComponent},
    { path: 'delete', component: EmployeeDeleteComponent},
] 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }