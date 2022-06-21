import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ShipperCreateComponent } from './shipper-create/shipper-create.component';
import { ShipperDeleteComponent } from './shipper-delete/shipper-delete.component';
import { ShipperEditComponent } from './shipper-edit/shipper-edit.component';
import { ShipperlistComponent } from './shipperlist/shipperlist.component';

const routes: Routes = [
  { path: 'add', component: ShipperCreateComponent},
  { path: 'list', component: ShipperlistComponent },
  { path: 'edit', component: ShipperEditComponent},
  { path: 'delete', component: ShipperDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
