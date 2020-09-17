import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {
  username: any;
  @Output() logoutClick = new EventEmitter();

  @Input() logindetails: any;
  @Output() sideNavClick = new EventEmitter();
  @Output() languageChange = new EventEmitter();

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    if (this.logindetails) {
      this.username = this.logindetails.username;
    }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.languageChange.emit(lang);
  }

  notifications() {

  }

  logout() {
    this.logoutClick.emit('logout');
  }

  menuClick() {
    this.sideNavClick.emit('sideMenuToggle');
  }

}
