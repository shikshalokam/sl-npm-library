import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerLink
   date = new Date();
  constructor() {
    this.footerLink =[
      {
        name: "Copyright @ " + this.date.getFullYear() + " Shikshalokam",
        URL: 'https://shikshalokam.org/'
      },
      {
        name: "Terms of Service",
        URL: 'https://shikshalokam.org/wp-content/uploads/2019/05/Final-ShikshaLokam-Terms-of-Use-MCM-08052019-Clean-copy-1.html'
      },
      {
        name: "Privacy Policy",
        URL: 'https://shikshalokam.org/wp-content/uploads/2019/01/data_privacy_policy.html'
      },
      {
        name: "Contact Us",
        URL: 'https://shikshalokam.org/contact-us/'
      }
   ];
  }

  ngOnInit() {
  }

}