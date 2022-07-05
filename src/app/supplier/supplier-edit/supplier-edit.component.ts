import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierService } from 'src/services/supplier.service';
 

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {

  editsupplierform : FormGroup
  isSuccessful : boolean = false
  id:number = 0
  
  constructor(private supplierService:SupplierService, private builder:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
    this.editsupplierform = builder.group({
      "id": new FormControl("", Validators.required),
      "companyName": new FormControl("", Validators.required),
      "contactName" : new FormControl("", Validators.required),
      "contactTitle" : new FormControl("", Validators.required),
      "address" : new FormControl("", Validators.required),
      "city" : new FormControl("", Validators.required),
      "regionId" : new FormControl("", Validators.required),
      "postalCode" : new FormControl("", Validators.required),
      "country" : new FormControl("", Validators.required),
      "phone" : new FormControl("", Validators.required)
    })
    activatedRoute.params.subscribe(d=> this.id=d["id"])

  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.supplierService.getById(this.id).subscribe(d=>{ 
      console.log(d)
      this.editsupplierform.setValue(d)
    } ) 
  }

  editSupplier(){ 
    this.supplierService.updateSupplier(this.editsupplierform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.editsupplierform.reset();
  }

  cancel(){
    this.router.navigate(["supplier/list"])
  }

}
