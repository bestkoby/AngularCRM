import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  addcategoryForm:FormGroup;


  constructor() {
    this.addcategoryForm=new FormGroup({
      "categoryName": new FormControl("",Validators.required),
      "categoryDescrip":new FormControl("",Validators.required)
    })
   }

  ngOnInit(): void {
  }

  save(){
    console.log(this.addcategoryForm.value)
  }

}
