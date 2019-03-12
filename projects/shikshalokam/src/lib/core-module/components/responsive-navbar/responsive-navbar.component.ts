import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.scss']
})
export class ResponsiveNavbarComponent implements OnInit {
  showDropdown = false;

  @Output() openDrawer = new EventEmitter();
  @Input() currentUser: any;
  @Input() logo ;
  @Output() Logout = new EventEmitter ();
  @Input() url;
  // apps;
  constructor() {
  }
  ngOnInit() {
    this.openSideNav();
    console.log(this.url, "url in resposive navbar")
  }
  onSignout(){
    this.Logout.emit(true);
  }
  openSideNav(){
    this.openDrawer.emit(true);
  }

  openDropdown() {
    console.log("dropdown click");

    this.showDropdown = !this.showDropdown;

  }
  navigate(url){
    console.log(url,"url123")
    if(url)
    window.open(url, "_blank");
  }
 
}
