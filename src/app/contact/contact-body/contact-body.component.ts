import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.css']
})
export class ContactBodyComponent implements OnInit {
  @Input() city: string;
  @Input() first_line: string;
  @Input() second_line: string;
  @Input() third_line: string;
  @Input() tel: string;
  


  constructor() {
    this.city = "city";
    this.first_line = "missing address";
    this.second_line = "missing suite/floor";
    this.third_line = "missing city/state/zip";
    this.tel = "";
    
  }

  ngOnInit(): void {
  }

}
