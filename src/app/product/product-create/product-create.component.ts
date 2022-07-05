import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/services/product.service'; 

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  productform : FormGroup
  isSuccessful : boolean = false
  
  constructor(private productService:ProductService, private builder:FormBuilder, private router:Router) {
    this.productform = builder.group({
      "Name": new FormControl("", Validators.required),
      "Title" : new FormControl("", Validators.required),
      "SupplierId" : new FormControl("", Validators.required),
      "CategoryId" : new FormControl("", Validators.required),
      "QuantityPerUnit" : new FormControl("", Validators.required),
      "UnitPrice" : new FormControl("", Validators.required),
      "UnitInStock" : new FormControl("", Validators.required),
      "UnitOnOrder" : new FormControl("", Validators.required),
      "ReorderLevel" : new FormControl("", Validators.required),
      "DiscontinuedCountry" : new FormControl("", Validators.required)  
    })

  }

  ngOnInit(): void {
  }

  addProduct(){
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
