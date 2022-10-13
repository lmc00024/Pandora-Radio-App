import { Component, OnInit } from '@angular/core';
import { ContactCardItemModel } from 'src/app/contact/contact-body/contact-item.model';
import { mock_contact_card_list } from 'src/app/contact/contact-body/mock-contact-card';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit {

  products: ContactCardItemModel[] = []
  constructor() {
  for(var x of mock_contact_card_list){
    console.log(x)
    this.products.push(x)
  }
  }
  ngOnInit(): void {
  }
}