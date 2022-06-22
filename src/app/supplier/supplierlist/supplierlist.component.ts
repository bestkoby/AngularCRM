import { Component, OnInit } from '@angular/core';
import { SupplierService } from 'src/services/supplier.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.scss']
})
export class SupplierlistComponent implements OnInit {

  suppliers:any=[]

  constructor(private supplierService:SupplierService) { }

  ngOnInit(): void {
    this.supplierService.getSupplier().subscribe((data)=>{
      this.suppliers=data;
    })
  }

}
