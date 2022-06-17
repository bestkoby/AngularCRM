import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-arithematic',
  templateUrl: './arithematic.component.html',
  styleUrls: ['./arithematic.component.scss']
})
export class ArithematicComponent implements OnInit {
  a:number=20
  b:number=30
  c=40
 
  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.c = this.a+this.b;
  }

}
