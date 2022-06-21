import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierDeleteComponent } from './supplier-delete/supplier-delete.component';


@NgModule({
  declarations: [
    SupplierlistComponent,
    SupplierEditComponent,
    SupplierCreateComponent,
    SupplierDeleteComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule
  ]
})
export class SupplierModule { }
