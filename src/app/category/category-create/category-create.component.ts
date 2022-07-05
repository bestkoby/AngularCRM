import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service'; 

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {
  isSuccessful:boolean = false 

  categoryForm:FormGroup;


  constructor(private router:Router, private categoryService:CategoryService ) {
    this.categoryForm=new FormGroup({
      "categoryName": new FormControl("",Validators.required),
      "categoryDescrip":new FormControl("",Validators.required),
    })
   }

  ngOnInit(): void {
  }

  save(){
    this.categoryService.addCategory(this.categoryForm.value).subscribe(d=> this.isSuccessful = true )
  }

  reset(){
    this.categoryForm.reset();
  }

  cancel(){
    this.router.navigate(["category/list"])
  }

}
