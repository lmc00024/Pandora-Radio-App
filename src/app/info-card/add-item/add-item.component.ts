import { Component, OnInit } from '@angular/core';
import { InfoCardItemModel } from '../infocard-item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private is:ItemService) { }

  ngOnInit(): void {
  }

  addItem(item:InfoCardItemModel) {
    console.log(item); // for testing 
    this.is.addItem(item);
  }

}
