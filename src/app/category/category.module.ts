import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';  
import { CategoryService } from 'src/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    CategorylistComponent,
    CategoryCreateComponent,
    CategoryEditComponent, 
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    CategoryService
  ]
})
export class CategoryModule { }
