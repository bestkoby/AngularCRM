import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  editcustomerform : FormGroup
  isSuccessful : boolean = false
  
  constructor(private customerService:CustomerService, private builder:FormBuilder, private router:Router) {
    this.editcustomerform = builder.group({
      "Name": new FormControl("", Validators.required),
      "Title" : new FormControl("", Validators.required),
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

  editCustomer(){
    this.customerService.updateCustomer(this.editcustomerform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.editcustomerform.reset();
  }

  cancel(){
    this.router.navigate(["customer/list"])
  }

}
