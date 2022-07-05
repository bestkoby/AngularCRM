import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionCreateComponent } from './region-create/region-create.component';
import { RegionRoutingModule } from './region-routing .module'; 
import { RegionEditComponent } from './region-edit/region-edit.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionService } from 'src/services/region.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegionListComponent,
    RegionCreateComponent, 
    RegionEditComponent, 
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    RegionService
  ],
})
export class RegionModule { }
