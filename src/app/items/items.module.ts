import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddItemComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
