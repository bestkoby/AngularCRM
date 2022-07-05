import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module'; 
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component'; 
import { CustomerService } from 'src/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ 
    CustomerlistComponent,
    CustomerCreateComponent,  
    CustomerEditComponent, 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    CustomerService
  ]
})
export class CustomerModule { }
