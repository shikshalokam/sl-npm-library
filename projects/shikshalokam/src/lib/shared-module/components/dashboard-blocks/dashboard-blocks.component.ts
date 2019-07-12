import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'dashboard-blocks',
  templateUrl: './dashboard-blocks.component.html',
  styleUrls: ['./dashboard-blocks.component.scss']
})
export class DashboardBlocksComponent implements OnInit {
 canAcess = localStorage.getItem('canAcess');
  constructor(private snackBar : MatSnackBar) { 
  }
  @Input() list: any;
  @Output()sendNavigationLink = new EventEmitter();
   ngOnInit() {
   }

   navigateLink(nav){
     this.sendNavigationLink.emit(nav);
   }
   showMessage(){
    this.snackBar.open( "Comming Soon.","Ok", { duration: 9000 })
   }
}
