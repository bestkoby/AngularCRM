import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipperService } from 'src/services/shipper.service';

@Component({
  selector: 'app-shipper-edit',
  templateUrl: './shipper-edit.component.html',
  styleUrls: ['./shipper-edit.component.scss']
})
export class ShipperEditComponent implements OnInit {
  id:number = 0 
  editshipperform:FormGroup 
  isSuccessful : boolean = false
  
  constructor(private shipperService:ShipperService, private builder:FormBuilder, private router:Router, private activeRoute:ActivatedRoute) {
    this.activeRoute.params.subscribe(d=> this.id=d['id'] )
    this.editshipperform = builder.group({
      "id": new FormControl("", Validators.required),
      "name": new FormControl("", Validators.required),
      "phone" : new FormControl("", Validators.required)
    }) 
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){ 
    this.shipperService.getById(this.id).subscribe(d=>{
      console.log(d)
      this.editshipperform.setValue(d)
    })
  }

  editShipper(){
    this.shipperService.updateShipper(this.editshipperform.value).subscribe(d=>{
      this.isSuccessful = true
    })
  }
  
  reset(){
    this.editshipperform.reset();
  }

  cancel(){
    this.router.navigate(["shipper/list"])
  }

}
