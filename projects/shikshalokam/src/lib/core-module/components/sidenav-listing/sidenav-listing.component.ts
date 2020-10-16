import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sidenav-listing',
  templateUrl: './sidenav-listing.component.html',
  styleUrls: ['./sidenav-listing.component.scss']
})
export class SideNavListingComponent implements OnInit {
  expandedIndex: any;
  @Input() libraryMenuData;
  @Output() sideNavListClick = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.expandedIndex = -1
  }

  // logic to show and hide the submenu
  collapse(index: number) {
    this.expandedIndex = index === this.expandedIndex ? -1 : index;
  }


  mdata(data) {
    this.sideNavListClick.emit(data);
  }
}
