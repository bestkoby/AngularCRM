import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AuthGuardGuard } from 'src/guard/auth-guard.guard';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
 
 

const routes: Routes = [  
  {path:"employee", loadChildren:()=> import("./employee/employee.module").then(m=>m.EmployeeModule)},
  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  {path:"region",loadChildren:()=>import("./region/region.module").then(m=>m.RegionModule) },
  { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'shipper', loadChildren: () => import('./shipper/shipper.module').then(m => m.ShipperModule) },
  {path:"login", component: LoginComponent, canActivate:[AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
