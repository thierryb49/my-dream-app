import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { State } from '../../../shared/state.enum';
import { ItemService } from '../../../core/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  myForm: FormGroup;
  states = Object.values(State);
  constructor(public fb: FormBuilder, private itemservice: ItemService) {

   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      reference: ['', Validators.minLength(4)],
      state: State.ALIVRER
    });
  }

  process(): void {
    console.log('form', this.myForm.value);
    this.itemservice.addItem(this.myForm.value);
  }

  isError(name: string): boolean {
    return this.myForm.get(name).invalid && this.myForm.get(name).touched;
  }

}
