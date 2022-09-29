import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() img: string;
  @Input() header: string;
  @Input() body: string;

  constructor() {
    this.img = "";
    this.header = "missing header";
    this.body= "missing body";

   }

  ngOnInit(): void {
  }

}
