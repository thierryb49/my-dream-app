import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
