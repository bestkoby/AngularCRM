import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productform : FormGroup
  isSuccessful : boolean = false
  id:number =0
  
  constructor(private productService:ProductService, private builder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
    this.productform = builder.group({
      "id": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required), 
      "supplierId" : new FormControl("", Validators.required),
      "categoryId" : new FormControl("", Validators.required),
      "quantityPerUnit" : new FormControl("", Validators.required),
      "unitPrice" : new FormControl("", Validators.required ),
      "unitInStock" : new FormControl("", Validators.required),
      "unitOnOrder" : new FormControl("", Validators.required),
      "reorderLevel" : new FormControl("", Validators.required),
      "discontinued" : new FormControl("", Validators.required)  
    })
    activatedRoute.params.subscribe(d=> this.id=d["id"] ) 
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.productService.getById(this.id).subscribe(d=>{ 
      console.log(d)
      this.productform.setValue(d)
    } ) 
  }



  addProduct(){ 
    console.log(this.productform.value)
    this.productService.addProduct(this.productform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.productform.reset();
  }

  cancel(){
    this.router.navigate(["product/list"])
  }

}
