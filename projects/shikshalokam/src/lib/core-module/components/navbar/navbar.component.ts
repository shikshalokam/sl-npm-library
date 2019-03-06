import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isLContainer } from '@angular/core/src/render3/util';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showDropdown = false;
 
  @Input() dropdownLabel;
  @Input() currentUser: any;
  @Input() logo;
  @Input() isLoggedIn: boolean;
  @Output() Logout = new EventEmitter();
  
  constructor() {
  }
  ngOnInit() {
    console.log(this.isLoggedIn)
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






