import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.scss']
})
export class ResponsiveNavbarComponent implements OnInit {
  @Output() openDrawer = new EventEmitter();
  @Input() currentUser: any;
  @Output() Logout = new EventEmitter ();
  constructor() {
  }
  ngOnInit() {
    this.openSideNav();
  }
  onSignout()
  {
    this.Logout.emit(true);
  }
  openSideNav(){
    this.openDrawer.emit(true);
  }

}
