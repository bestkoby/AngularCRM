import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipperService } from 'src/services/shipper.service';

@Component({
  selector: 'app-shipper-create',
  templateUrl: './shipper-create.component.html',
  styleUrls: ['./shipper-create.component.scss']
})
export class ShipperCreateComponent implements OnInit {
  addshipperform : FormGroup
  isSuccessful : boolean = false
  
  constructor(private shipperService:ShipperService, private builder:FormBuilder, private router:Router) {
    this.addshipperform = builder.group({
      "name": new FormControl("", Validators.required),
      "phone" : new FormControl("", Validators.required)
    })

  }

  ngOnInit(): void {
  }

  addShipper(){
    this.shipperService.addShipper(this.addshipperform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.addshipperform.reset();
  }

  cancel(){
    this.router.navigate(["shipper/list"])
  }

}
