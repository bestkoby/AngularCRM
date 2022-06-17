import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AppComponent } from './app.component';
import { ArithematicComponent } from './arithematic/arithematic.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {
    path:'products', 
    children:[
      {path:'add',component:AddProductComponent},
      {path:'list',component:ProductListComponent,},
      {path:'edit/:id',component:EditProductComponent},
    ]
  },
  {path:'math',component:ArithematicComponent},
  {path:'employee',component:EmployeelistComponent},
  {path:'**',component:PageNotFoundComponent}  //not accessed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
