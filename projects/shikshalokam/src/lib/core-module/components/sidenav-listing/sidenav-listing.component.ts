import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-sidenav-listing',
  templateUrl: './sidenav-listing.component.html',
  styleUrls: ['./sidenav-listing.component.scss']
})
export class SideNavListingComponent implements OnInit {
  @Input() libraryMenuData;
  @Output() sideNavListClick = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  mdata() {
    this.sideNavListClick.emit('');
  }
}
