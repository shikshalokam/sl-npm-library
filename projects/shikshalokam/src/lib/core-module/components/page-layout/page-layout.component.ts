import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuData } from '../../interfaces/menu.interface';

@Component({
  selector: 'lib-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  type: any;
  @Input() sideMenuData: MenuData[];
  @Output() sideMenuClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  clicked(data) {
    console.log('PageLayoutComponent - clicked');
    
    this.sideClick(data);
  }

  sideClick(data) {
    console.log('PageLayoutComponent - sideClick', data);
    this.type = data;
    this.sideMenuClick.emit(data);
  }


}



