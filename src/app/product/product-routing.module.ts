import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ProductCreateComponent } from './product-create/product-create.component'; 
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  { path: 'add', component: ProductCreateComponent },
  { path: 'list', component: ProductlistComponent},
  { path: 'edit/:id', component: ProductEditComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
