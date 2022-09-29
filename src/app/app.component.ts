import { Component } from '@angular/core';
import { mock_card_list } from './info-card/mock-card-list';
import { InfoCardItemModel } from './info-card/infocard-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  products: InfoCardItemModel[] = []
  constructor(){
  for(var x of mock_card_list){
    console.log(x)
    this.products.push(x)
  }
  }
}
