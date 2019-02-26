import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showDropdown = false;
  @Input() dropdownLabel ;
  @Input() currentUser: any;
  @Output() Logout = new EventEmitter ();
  constructor() {
  }
  ngOnInit() {
  }
  openDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  onSignout()
  {
    this.Logout.emit(true);
  }
}



