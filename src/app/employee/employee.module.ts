import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'; 
import { EmployeeService } from 'src/services/employee.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    EmployeelistComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent, 
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }
