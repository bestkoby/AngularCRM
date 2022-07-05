import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { SupplierService } from 'src/services/supplier.service';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.scss']
})
export class SupplierCreateComponent implements OnInit {

  addsupplierform : FormGroup
  isSuccessful : boolean = false
  
  constructor(private supplierService:SupplierService, private builder:FormBuilder, private router:Router) {
    this.addsupplierform = builder.group({
      "CompanyName": new FormControl("", Validators.required),
      "ContactName" : new FormControl("", Validators.required),
      "ContactTitle" : new FormControl("", Validators.required),
      "Address" : new FormControl("", Validators.required),
      "City" : new FormControl("", Validators.required),
      "RegionId" : new FormControl("", Validators.required),
      "PostalCode" : new FormControl("", Validators.required),
      "Country" : new FormControl("", Validators.required),
      "Phone" : new FormControl("", Validators.required)
    })

  }

  ngOnInit(): void {
  }

  addSupplier(){
    this.supplierService.addSupplier(this.addsupplierform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.addsupplierform.reset();
  }

  cancel(){
    this.router.navigate(["supplier/list"])
  }

}
