import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ShareLinkViewComponent } from '../share-link-view/share-link-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core-module/services/api-service/api.service';
import { UtilityService } from '../../../core-module/services/utility-service/utility.service';

@Component({
  selector: 'app-share-link',
  templateUrl: './share-link.component.html',
  styleUrls: ['./share-link.component.scss']
})
export class ShareLinkComponent implements OnInit {
  @Input() publicSharedBaseUrl;
  @Input() shareLinkApi  ;
  @Input() globalConfig;
  @Input() componentId ;
  url = {
    publicURL: '',
    privateURL: '',
    reportName : ''
  }
  uuId: any;
  constructor(public dialog: MatDialog, 
    private snackBar : MatSnackBar,
    private utility : UtilityService,
    private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }
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
      this.url.reportName = this.componentId;
    })
    this.apiService.post(this.shareLinkApi , this.url).subscribe( successData =>{
      console.log(successData);
      

      this.uuId = this.publicSharedBaseUrl.substring(0, this.publicSharedBaseUrl.length - 1)  +"?linkId="+ successData['result']['linkId'];
      this.url.publicURL = "https://devhome.shikshalokam.org/programs/public?linkId="+successData['result']['linkId'] +"&componentName="+this.componentId;

      this.openDialog();
    },error => {
      this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        this.utility.loaderHide();
    }

    )



  }
  openDialog() {
    const dialogRef = this.dialog.open(ShareLinkViewComponent, {
      width: '500px',
      height: '250px',
      data : this.url.publicURL
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


