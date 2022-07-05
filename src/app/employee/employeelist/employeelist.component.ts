import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {  
  employees:any=[]
  isSuccessful:boolean = false; 

  constructor(private employeeService:EmployeeService ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.employeeService.getEmployee().subscribe((data)=>{
      this.employees=data;
    }) 
  }

  delData(id:any){
    this.employeeService.deleteEmployee(id).subscribe((data)=>{
      this.getData();
      this.isSuccessful = true;
      setTimeout(() => {
        this.isSuccessful = false;
      }, 2000);  //2s
    })
  }

}
