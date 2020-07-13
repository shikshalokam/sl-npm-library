import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  username: any;
  @Output() logoutClick = new EventEmitter();

  @Input() logindetails: any;
  @Output() sideNavClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    if (this.logindetails) {
      this.username = this.logindetails.username;
    }
  }

  notifications() {

  }

  logout() {
    this.logoutClick.emit('logout');
  }

  menuClick() {
    this.sideNavClick.emit('sideMenuToggle');
  }

}
