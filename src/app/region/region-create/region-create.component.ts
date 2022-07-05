import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/services/region.service';


@Component({
  selector: 'app-region-create',
  templateUrl: './region-create.component.html',
  styleUrls: ['./region-create.component.scss']
})
export class RegionCreateComponent implements OnInit {
 
  addRegionForm:FormGroup; 
  loadregion={
    "Name" : "regionName", 
  };
  isSuccessful:boolean=false;
  constructor(private regionService:RegionService, private router:Router) {
    this.addRegionForm=new FormGroup({
      'Name':new FormControl("",[Validators.required,Validators.minLength(4)] ),  
    });
    this.addRegionForm.setValue(this.loadregion);
   }

  ngOnInit(): void {
     
  }
  saveRegion() {
     console.log(this.addRegionForm.value);
     const region:Region = this.addRegionForm.value; 
     console.log(region);
     this.regionService.addRegion(region).subscribe((data)=>{
      this.isSuccessful = true 
     })
  }

  reset(){
    this.addRegionForm.reset();
  }

  cancel(){
    this.router.navigate(["region/list"])
  }

}
