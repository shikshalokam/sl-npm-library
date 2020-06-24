import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLink
  constructor() {
    this.footerLink =[
      {
        name: "Copyright @2020 Shikshalokam"
      },
      {
        name: "Terms of Service"
      },
      {
        name: "Privacy Policy"
      },
      {
        name: "Contact Us"
      }
   ];
  }

  ngOnInit() {
  }

}