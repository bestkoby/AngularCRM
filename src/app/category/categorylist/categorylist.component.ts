import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {

  categorys:any=[] 

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data)=>{
      this.categorys=data
    })
  }

}
