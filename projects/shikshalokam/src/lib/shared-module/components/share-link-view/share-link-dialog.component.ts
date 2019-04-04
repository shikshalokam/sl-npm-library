import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'share-link-view',
  templateUrl: 'share-link-dialog.component.html',
  styleUrls: ['./share-link-dialog.component.scss']

})
export class ShareLinkViewComponent {
  sharLink = "dev.shikshalokam.org/reports/operation/ssq121ds"
  constructor(
    public dialogRef: MatDialogRef<ShareLinkViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
   copyLink(inputElement) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
}
