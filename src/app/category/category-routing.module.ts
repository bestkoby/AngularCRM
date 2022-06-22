import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategorylistComponent } from './categorylist/categorylist.component';

const routes: Routes = [
  { path: 'add', component: CategoryCreateComponent },
  { path: 'list', component: CategorylistComponent },
  { path: 'edit/:id', component: CategoryEditComponent },
  { path: 'delete/:id', component: CategoryDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
