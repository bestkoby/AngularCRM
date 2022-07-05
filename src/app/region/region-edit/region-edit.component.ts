import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-region-edit',
  templateUrl: './region-edit.component.html',
  styleUrls: ['./region-edit.component.scss']
})
export class RegionEditComponent implements OnInit {
  id:number=0;
  isSuccessful:boolean=false;
  region:Region={
    id : 0,
    name : "" 
  };

  constructor(private activatedRoute:ActivatedRoute, private regionService:RegionService,private router:Router ) {
    activatedRoute.params.subscribe(d=>{
      this.id= d["id"] 
      }) 
   }

  ngOnInit(): void { 
    this.getData( )  
  }

  getData( ){
    this.regionService.getRegionById(this.id).subscribe(d=>{
      this.region = d;
    }) 
  }

  edit(ngForm:NgForm){  
    this.regionService.updateRegion(this.region).subscribe(d=>this.isSuccessful=true); 
  }

  resetPage(form:NgForm){
    form.reset();
  }

  cancel(){
    this.router.navigate(['region/list']);
  } 
}
