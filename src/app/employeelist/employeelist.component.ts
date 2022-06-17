import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  product=[
    {id:1,name:"Chair",UnitPrice:"20"},
    {id:2,name:"Apple",UnitPrice:"10"},
    {id:3,name:"Prange",UnitPrice:"30"},
    {id:4,name:"Monitor",UnitPrice:"110"},
    {id:5,name:"abc",UnitPrice:"50"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
