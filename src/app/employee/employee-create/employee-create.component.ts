import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {

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
  insert(form:NgForm){
    console.log(form.value);

  }

}
