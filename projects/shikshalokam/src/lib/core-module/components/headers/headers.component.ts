import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  username: any;
  @Output() logoutClick = new EventEmitter();

  // @Input() loginUser: any;

  constructor() {
    // this.username = this.loginUser.username;
   }

  ngOnInit(): void {
  }

  notifications() {

  }

  logout() {
    this.logoutClick.emit('logout');
  }

}
