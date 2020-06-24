import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuData } from '../../interfaces/menu.interface';

@Component({
  selector: 'lib-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  type: any;
  @Input() sideMenuData: any;
  @Output() sideMenuClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('sideMenuData', this.sideMenuData);
  }

  sideClick(data) {
    this.type = data;
    this.sideMenuClick.emit(data);
  }

  logoutMethod(data) {
    console.log('library logout', data);

  }

}



