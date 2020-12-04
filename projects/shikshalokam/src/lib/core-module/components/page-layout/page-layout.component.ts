import { Component, OnInit, Input, Output, EventEmitter, ViewChild , ChangeDetectorRef, OnDestroy} from '@angular/core';
import { MenuData } from '../../interfaces/menu.interface';
import { MatSidenav } from '@angular/material/sidenav';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'lib-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  type: any;
  username: any;
  @Input() sideMenuData: MenuData[];
  @Input() logindetails: any;
  @Output() sideMenuClick = new EventEmitter();
  @ViewChild('sidenav') public sidenav: MatSidenav;

  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
   }

  ngOnInit(): void {
    if (this.logindetails) {
      this.username = this.logindetails.username;
    }
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



