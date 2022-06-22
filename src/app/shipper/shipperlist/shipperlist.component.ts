import { Component, OnInit } from '@angular/core';
import { ShipperService } from 'src/services/shipper.service';

@Component({
  selector: 'app-shipperlist',
  templateUrl: './shipperlist.component.html',
  styleUrls: ['./shipperlist.component.scss']
})
export class ShipperlistComponent implements OnInit {

  shippers:any=[]

  constructor(private shipperService:ShipperService ) { }

  ngOnInit(): void {
    this.shipperService.getShipper().subscribe((data)=>{
      this.shippers = data

    })
  }

}
