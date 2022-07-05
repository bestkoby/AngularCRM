import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  isSuccessful:boolean = false
  employee:Employee ={
    firstName: '',
    lastName:'',
    city:'',
    title:'',
    hireDate:new Date(),
    birthDate:new Date(),
    regionId:0,
    reportsTo:0,
    titleOfConrtesy:'',  
    id:0,
    address:"",
    photoPath:"",
    phone:"",
    postalCode:0,
    country:"" 
  }
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
  } 

  insert(form:NgForm){ 
    this.employeeService.addEmployee(form.value).subscribe(d=>{
      this.isSuccessful = true
    })

  }
  resetPage(form:NgForm){
    form.reset();
  } 
}
