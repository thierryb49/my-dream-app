import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/item.service';
import { Item } from '../../../shared/item.model';
import { State } from '../../../shared/state.enum';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  constructor(public itemservice: ItemService) { }

  ngOnInit() {
  }

  changeFromParent(item: Item) {
    let newState;
    if (State.ALIVRER === item.state) {
    newState = State.ENCOURS;
    }
    if (State.ENCOURS === item.state) {
    newState = State.LIVREE;
    }
    item.state = newState;
    this.itemservice.update(item);
  }

}
