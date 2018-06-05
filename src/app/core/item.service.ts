import { Injectable } from '@angular/core';
import { Item } from '../shared/item.model';
import { State } from '../shared/state.enum';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  collection: Item[];
  constructor() {
    this.collection = [
      {
        id: '1',
        name: 'Commande 1',
        reference: 'CMD1',
        state: State.ALIVRER
      },
      {
        id: '2',
        name: 'Commande 2',
        reference: 'CMD2',
        state: State.ENCOURS
      },
      {
        id: '3',
        name: 'Commande 3',
        reference: 'CMD3',
        state: State.LIVREE
      }
    ];
  }
  // update item
  update(item: Item): void {
    this.collection.forEach((tem: Item) => {
      if (item.id === tem.id) {
        tem.state = item.state;
      }
    });
  }
}
