import { Component, OnInit } from '@angular/core'; 
import { Router,ActivatedRoute } from '@angular/router';
import { Region } from 'src/app/model/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {

  regions:Region[]=[ ];
  isSuccessful:boolean=false;
  constructor(private regionService:RegionService, private router:Router ) { 
  }

  ngOnInit(): void { 
    this.getData();
  }

  getData(){
    // this.regionService.getRegion() return observable, which mean no execu  
    this.regionService.getRegion().subscribe((data)=>{ 
      this.regions = data;
      //console.log(this.regions);
    });
  }

  delData(id:any){
    console.log(id)
    this.regionService.deleteRegion(id).subscribe((d:any)=>{
      this.isSuccessful = true
      this.getData();
      setTimeout(() => {
        this.isSuccessful  = false
      }, 2000);  //2s 
    })
  }

  edit(id:any){
    this.router.navigate(['region/edit/'+id]);
  }
}
