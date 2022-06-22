import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperRoutingModule } from './shipper-routing.module';
import { ShipperlistComponent } from './shipperlist/shipperlist.component';
import { ShipperCreateComponent } from './shipper-create/shipper-create.component';
import { ShipperEditComponent } from './shipper-edit/shipper-edit.component';
import { ShipperDeleteComponent } from './shipper-delete/shipper-delete.component';
import { ShipperService } from 'src/services/shipper.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ShipperlistComponent,
    ShipperCreateComponent,
    ShipperEditComponent,
    ShipperDeleteComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    HttpClientModule
  ],
  providers:[
    ShipperService
  ]
})
export class ShipperModule { }
