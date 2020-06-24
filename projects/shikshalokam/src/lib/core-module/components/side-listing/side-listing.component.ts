import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-side-listing',
  templateUrl: './side-listing.component.html',
  styleUrls: ['./side-listing.component.scss']
})
export class SideListingComponent implements OnInit {
  @Input() sidedata;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('SideListingComponent', this.sidedata);
  }

  // sideClick(data) {
  //   this.router.navigate(data);

  // }

}
