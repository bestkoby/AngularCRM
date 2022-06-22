import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  employee:Employee= {
    Id:1,
    FirstName: "",
    LastName: "",
    City: "",
    Title: "",
    HireDate: new Date(),
    BirthDate:new Date(),
    TitleOfConrtesy:"",
    RegionId:0,
    Address:"",
    PostalCode:0,
    Phone:"",
    PhotoPath:"",
    Country:"",
    ReportsTo:0 
  }

  constructor() { }

  ngOnInit(): void {
  }
  setData( ){
    this.employee={
      Id:2,
      FirstName: "",
      LastName: "",
      City: "",
      Title: "",
      HireDate: new Date(),
      BirthDate:new Date(),
      TitleOfConrtesy:"",
      RegionId:0,
      Address:"",
      PostalCode:0,
      Phone:"",
      PhotoPath:"",
      Country:"",
      ReportsTo:0 
    }
  }
  edit(form:NgForm){
    this.setData()

  }
  resetPage(form:NgForm){
    form.reset();
  } 
  

}
