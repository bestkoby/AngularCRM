import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/services/employee.service';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit { 
  id:number=0;
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

  constructor(activatedRoute:ActivatedRoute, private empService:EmployeeService) {
    activatedRoute.params.subscribe(d=>{
      this.id=  d["id"]
      }) 
   }

  ngOnInit(): void {
  }
  setData(form:NgForm ){
    this.empService.getEmployeeById(this.id).subscribe(d=>{
      this.employee=d;
    })
    form.setValue(this.employee)
  }
  edit(form:NgForm){ 
    this.employee= form.value;
    this.empService.updateEmployee(this.employee).subscribe(d=>{ 
  });
  }
  resetPage(form:NgForm){
    form.reset();
  } 
  

}
