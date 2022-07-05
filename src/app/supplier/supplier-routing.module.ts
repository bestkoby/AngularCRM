import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { SupplierCreateComponent } from './supplier-create/supplier-create.component'; 
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';

const routes: Routes = [
  { path: 'add', component: SupplierCreateComponent },
  { path: 'list', component: SupplierlistComponent },
  {path: 'edit/:id', component:SupplierEditComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
