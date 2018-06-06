import { Injectable } from '@angular/core';
import { Item} from '../shared/item.model';
import { State } from '../shared/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  collection$: Observable<Item[]>;
  itemCollection: AngularFirestoreCollection<Item>;
  collection: Item[];

  constructor(private afs: AngularFirestore) {
    this.itemCollection = afs.collection<Item>('collection');

    // observable qui se mettra à jour automatiquement
    this.collection$ = this.itemCollection.valueChanges();

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

  addItem(item: Item): void {
    item.id = this.afs.createId();
    this.itemCollection.doc(item.id).set(item)
    .catch(error => console.log(error));
  }
  update(item: Item): void {
    this.itemCollection.doc(item.id).update(item)
    .catch(error => console.log(error));
  }

  delete(item: Item): void {
    this.itemCollection.doc(item.id).delete()
    .catch(error => console.log(error));
  }

}
