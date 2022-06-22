import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';

const routes: Routes = [
  { path: 'add', component: CustomerCreateComponent },
  { path: 'list', component: CustomerlistComponent},
  { path: 'edit/:id', component: CustomerEditComponent },
  { path: 'delete/:id', component: CustomerDeleteComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
