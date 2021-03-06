import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddItemComponent } from './containers/add-item/add-item.component';

const itemsRoutes: Routes = [
  {path: 'add', component: AddItemComponent},
  {path: '**', component: ListItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
