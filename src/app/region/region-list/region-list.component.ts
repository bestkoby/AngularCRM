import { Component, OnInit } from '@angular/core'; 
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss']
})
export class RegionListComponent implements OnInit {

  regions:any=[ ];
  constructor(private regionService:RegionService) { }

  ngOnInit(): void {
    // this.regionService.getRegion() return observable, which mean no execu  
    this.regionService.getRegion().subscribe((data)=>{ 
      this.regions = data;
      //console.log(this.regions);
    });
    
  }

}
