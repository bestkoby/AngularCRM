import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {
  // employees:Employee[]= [{
  //   Id:1,
  //   FirstName: "",
  //   LastName: "",
  //   City: "",
  //   Title: "",
  //   HireDate: new Date(),
  //   BirthDate:new Date(),
  //   TitleOfConrtesy:"",
  //   RegionId:0,
  //   Address:"",
  //   PostalCode:0,
  //   Phone:"",
  //   PhotoPath:"",
  //   Country:"",
  //   ReportsTo:0 
  // }]

  employees:any=[]

  constructor(private employeeService:EmployeeService ) { }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((data)=>{
      this.employees=data;
    })

  }

}
