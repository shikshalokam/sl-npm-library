import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboard-blocks',
  templateUrl: './dashboard-blocks.component.html',
  styleUrls: ['./dashboard-blocks.component.scss']
})
export class DashboardBlocksComponent implements OnInit {
 canAcess = localStorage.getItem('canAcess');
  constructor() { 
  }
  @Input() list: any;

   ngOnInit() {
   }

}