import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { isLContainer } from '@angular/core/src/render3/util';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  apps;
  urlLocation

  @Input() url;
  showDropdown = false;
 
  @Input() dropdownLabel;
  @Input() currentUser: any;
  @Input() logo;
  @Input() isLoggedIn: boolean;
  @Output() Logout = new EventEmitter();
  
  constructor() {
  }

  navigate(url){
    console.log(url,"url123")
    if(url)
    window.open(url, "_blank");
  }


  ngOnInit() {
    if(this.url){
    this.apps=[
      {    
        icon:" assignment_turned_in",
        tooltip:"Assessments",
        url:this.url
      },
      {    
        icon:"school",
        tooltip:"Learning",
        url:this.url+"/assessments/learning"
      },
      {    
        icon:"dashboard",
        tooltip:"Programs",
        url:this.url+"/assessments/programs"
      }
    ]
  }
}
  openDropdown() {

    this.showDropdown = !this.showDropdown;

  }
  onSignout() {
    this.Logout.emit(true);
  }

  onLogin() {
    this.isLoggedIn=!this.isLoggedIn;
    this.onSignout();
  
}


  getClass(name){
    let currentUrl =window.location.href;
    if(currentUrl.includes(name.toLowerCase())){
      return 'active'
    }else{
      return 'inactive'
    }
  }
  
}






