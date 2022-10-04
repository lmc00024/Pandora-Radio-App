import { Component, OnInit } from '@angular/core';
import { InfoCardItemModel } from 'src/app/info-card/infocard-item.model';
import { mock_card_list } from 'src/app/info-card/mock-card-list';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  
  products: InfoCardItemModel[] = []
  constructor(){
  for(var x of mock_card_list){
    console.log(x)
    this.products.push(x)
  }
  }
  ngOnInit(): void {
  }

}
