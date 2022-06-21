import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionCreateComponent } from './region-create/region-create.component';
import { RegionRoutingModule } from './region-routing .module';
import { RegionDeleteComponent } from './region-delete/region-delete.component';
import { RegionEditComponent } from './region-edit/region-edit.component';



@NgModule({
  declarations: [
    RegionListComponent,
    RegionCreateComponent,
    RegionDeleteComponent,
    RegionEditComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule
  ]
})
export class RegionModule { }
