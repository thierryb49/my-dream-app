import { Component, OnInit, Input } from '@angular/core';
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
  @Input() item: Item;
  constructor(private itemservice: ItemService) { }

  ngOnInit() {
  }

  changeState(state: State): void {
    this.item.state = state;
    this.itemservice.update(this.item);
  }

}
