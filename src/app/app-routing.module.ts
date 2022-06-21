import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
 
 

const routes: Routes = [  
  {path:"employee", loadChildren:()=> import("./employee/employee.module").then(m=>m.EmployeeModule)},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  {path:"region",loadChildren:()=>import("./region/region.module").then(m=>m.RegionModule)},
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'shipper', loadChildren: () => import('./shipper/shipper.module').then(m => m.ShipperModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
