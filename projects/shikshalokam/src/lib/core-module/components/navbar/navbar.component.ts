import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() url;
  showDropdown = false;
  @Input() dropdownLabel;
  @Input() currentUser: any;
  @Input() logo ;
  @Output() Logout = new EventEmitter ();
  @Input() isLoggedIn;
  @Input() portal;
  @Input() noAssess = false;

  constructor() {
  }


  ngOnInit() {
  }
  homePage(url){
    window.open(url, "_self");
  }

  openDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  onSignout() {
    this.Logout.emit(true);
  }
  onLogin() {
    this.isLoggedIn=!this.isLoggedIn;
    this.onSignout();
   }
}






