import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ShareLinkViewComponent } from '../share-link-view/share-link-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core-module/services/api-service/api.service';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss']
})
export class ShareLinkComponent implements OnInit {
  @Input() publicSharedBaseUrl;
  @Input() shareLinkApi  ;
  url = {
    publicURL: '',
    privateURL: ''
  }
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }
  ngOnInit() {
    console.log(this.publicSharedBaseUrl)
  }

  shareLink(): void {
    this.url.privateURL = window.location.href;
    console.log("shared link")
    this.route.url.subscribe(url => {

      console.log(url);
      let routeIndex = this.url.privateURL.indexOf(url[0].path)
      this.url.publicURL = this.publicSharedBaseUrl + this.url.privateURL.slice(routeIndex);
      console.log(this.url)
    })
    this.apiService.post(this.shareLinkApi , this.url).subscribe( successData =>{
      console.log(successData);
    }

    )



  }
  openDialog() {
    const dialogRef = this.dialog.open(ShareLinkViewComponent, {
      width: '500px',
      height: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


