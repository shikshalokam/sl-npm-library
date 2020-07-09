import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MenuData } from '../../interfaces/menu.interface';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'lib-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  type: any;
  @Input() sideMenuData: MenuData[];
  @Output() sideMenuClick = new EventEmitter();
  @ViewChild('sidenav') public sidenav: MatSidenav;
  constructor() { }

  ngOnInit(): void {
  }
  clicked(data) {
    this.sideClick(data);
  }

  sideClick(data) {
    this.type = data;
    this.sideMenuClick.emit(data);
  }


  toggleMethod() {
    this.sidenav.toggle();
  }

}



