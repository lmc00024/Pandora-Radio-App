import { Component, OnInit } from '@angular/core';
import { InfoCardItemModel } from 'src/app/info-card/infocard-item.model';
import { ProductService } from 'src/app/info-card/app.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  
  products: InfoCardItemModel[] = []
  constructor(private productsService:ProductService){

  
  }
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: InfoCardItemModel[])=>{
      for (var x of data) {
        console.log(x)
        this.products.push(x)
      }
    })
  }

}
