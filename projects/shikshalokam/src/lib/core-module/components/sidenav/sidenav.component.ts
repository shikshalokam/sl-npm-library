import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() link: any;
  @Input() programsShow;
  permissionAssignedRole;
  programId;
  assessmentId;
  constructor() { 
  }

  ngOnInit() {
    this.permissionAssignedRole = JSON.parse(localStorage.getItem('canAcess'));
  }

}
