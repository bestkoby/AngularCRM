import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service'; 

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  isSuccessful:boolean = false 
  id:number = 0 
  categoryForm:FormGroup;


  constructor(private router:Router, private categoryService:CategoryService, private activatedRoute:ActivatedRoute ) {
    this.categoryForm=new FormGroup({
      "id": new FormControl("",Validators.required),
      "name": new FormControl("",Validators.required),
      "description":new FormControl("",Validators.required)
    })
    activatedRoute.params.subscribe(d=> this.id = d["id"])
   }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.categoryService.getById(this.id).subscribe(d=>{ 
      this.categoryForm.setValue(d)
    } ) 
  }


  save(){
    console.log(this.categoryForm.value);
    this.categoryService.updateCategory(this.categoryForm.value).subscribe(d=>{ 
      this.isSuccessful = true
    })
  }

  reset(){
    this.categoryForm.reset();
  }

  cancel(){
    this.router.navigate(["category/list"])
  }

}
