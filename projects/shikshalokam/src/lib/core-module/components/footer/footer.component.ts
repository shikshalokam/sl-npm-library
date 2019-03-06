import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLink
  constructor() {
    this.footerLink =[
      {
        name: "Copyright @2019 Shikshalokam"
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