import { Component, OnInit } from '@angular/core'; 
import { CustomerService } from 'src/services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {

  customers:any=[] 

  constructor(private categoryService:CustomerService) { }

  ngOnInit(): void {
    this.categoryService.getCustomer().subscribe((data)=>{
      this.customers = data
    })
  }

}
