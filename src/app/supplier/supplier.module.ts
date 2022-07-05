import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierlistComponent } from './supplierlist/supplierlist.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component'; 
import { SupplierService } from 'src/services/supplier.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SupplierlistComponent,
    SupplierEditComponent,
    SupplierCreateComponent, 
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    SupplierService
  ]
})
export class SupplierModule { }
