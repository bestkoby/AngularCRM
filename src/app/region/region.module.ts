import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionCreateComponent } from './region-create/region-create.component';
import { RegionRoutingModule } from './region-routing .module';
import { RegionDeleteComponent } from './region-delete/region-delete.component';
import { RegionEditComponent } from './region-edit/region-edit.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { RegionService } from 'src/services/region.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RegionListComponent,
    RegionCreateComponent,
    RegionDeleteComponent,
    RegionEditComponent, 
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    RegionService
  ],
})
export class RegionModule { }
