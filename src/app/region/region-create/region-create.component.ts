import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-region-create',
  templateUrl: './region-create.component.html',
  styleUrls: ['./region-create.component.scss']
})
export class RegionCreateComponent implements OnInit {

  addRegionForm:FormGroup; 
  loadregion={
    "regionName" : "regionName",
    "regionDescrip":"regionDescrip" 
  };
  constructor() {
    this.addRegionForm=new FormGroup({
      'regionName':new FormControl("",[Validators.required,Validators.minLength(4)] ),
      'regionDescrip':new FormControl()

    });
    this.addRegionForm.setValue(this.loadregion);
   }

  ngOnInit(): void {
     
  }
  saveRegion() {
     console.log(this.addRegionForm.value);
  }

}
