import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../shared/item.model';
import { ItemService } from '../../../core/item.service';
import { State } from '../../../shared/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  state = State; // Enum
  @Output() changedState: EventEmitter<Item> = new EventEmitter();
  @Input() item: Item;
  constructor(private itemservice: ItemService) { }

  ngOnInit() {
  }

  /*
    Change State
  */
  changeState(state: State): void {
    this.item.state = state;
    this.itemservice.update(this.item);
  }

  /*
    Change State New
  */
 changeStateNew(): void {
  this.changedState.emit(this.item);

  /*let newState;
  if (this.state.ALIVRER === this.item.state) {
   newState = this.state.ENCOURS;
  }
  if (this.state.ENCOURS === this.item.state) {
   newState = this.state.LIVREE;
  }
  this.item.state = newState;
  this.itemservice.update(this.item);*/
}

isLivree() {
  return this.item.state !== this.state.LIVREE;
}

newState() {
  return (this.state.ALIVRER === this.item.state) ? this.state.ENCOURS : this.state.LIVREE;
}

}
