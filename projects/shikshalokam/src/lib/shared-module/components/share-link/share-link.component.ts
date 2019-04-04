import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareLinkViewComponent } from '../share-link-view/share-link-dialog.component';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss']
})
export class ShareLinkComponent implements OnInit {
 
  constructor(public dialog: MatDialog) {}
   ngOnInit(){}
   
  openDialog(): void {
    const dialogRef = this.dialog.open(ShareLinkViewComponent, {
      width: '500px',
      height:'250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

