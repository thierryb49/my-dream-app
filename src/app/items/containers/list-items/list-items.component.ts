import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../core/item.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  constructor(public itemservice: ItemService) { }

  ngOnInit() {
  }

}
