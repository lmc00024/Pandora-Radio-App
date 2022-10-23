import { Component, OnInit } from '@angular/core';
import { ContactCardItemModel } from 'src/app/contact/contact-body/contact-item.model';
import { ProductService } from 'src/app/info-card/app.service';

@Component({
  selector: 'app-contact-layout',
  templateUrl: './contact-layout.component.html',
  styleUrls: ['./contact-layout.component.css']
})
export class ContactLayoutComponent implements OnInit {

  products: ContactCardItemModel[] = []
  constructor(private productsService:ProductService) {
  
  }
  ngOnInit(): void {
    this.productsService.getLocations().subscribe((data: ContactCardItemModel[])=>{
      for (var x of data) {
        console.log(x)
        this.products.push(x)
      }
    })
  }
}