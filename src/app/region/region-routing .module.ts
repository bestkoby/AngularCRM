import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { RegionCreateComponent } from "./region-create/region-create.component";
import { RegionDeleteComponent } from "./region-delete/region-delete.component";
import { RegionEditComponent } from "./region-edit/region-edit.component";
import { RegionListComponent } from "./region-list/region-list.component";

const routes:Routes=[
    {path:"list",component:RegionListComponent},
    {path:"add",component:RegionCreateComponent},  
    {path: 'edit', component:RegionEditComponent },
    {path: 'delete', component: RegionDeleteComponent},
] 

@NgModule({
    imports:[RouterModule.forChild(routes)], 
    exports: [RouterModule]
})

export class RegionRoutingModule{ }