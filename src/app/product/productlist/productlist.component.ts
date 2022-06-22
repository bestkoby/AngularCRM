import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products:any=[];

  constructor(private productService:ProductService ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data)=>{
      this.products=data; 
    })
  }

}
