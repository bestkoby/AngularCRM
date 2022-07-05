import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  addcustomerform : FormGroup
  isSuccessful : boolean = false
  
  constructor(private customerService:CustomerService, private builder:FormBuilder, private router:Router) {
    this.addcustomerform = builder.group({
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

  addCustomer(){
    this.customerService.addCustomer(this.addcustomerform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.addcustomerform.reset();
  }

  cancel(){
    this.router.navigate(["customer/list"])
  }

}
