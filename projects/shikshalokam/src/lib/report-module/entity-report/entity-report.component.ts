import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../report-service/report.service';

import { MatSnackBar } from '@angular/material';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';

@Component({
  selector: 'app-entity-report',
  templateUrl: './entity-report.component.html',
  styleUrls: ['./entity-report.component.scss']
})
export class EntityReportComponent implements OnInit {

  headings = 'headings.reportEntityReport'
  entityResult;
  insightReport;
  programId;
  schoolId;
  @Input() globalConfig ;
  @Input()apiBaseUrl: any;
  @Input()reportConfig: any;
  shareLinkApi: any;
  publicSharedBaseUrl: any;
  linkId: string;
  componentId: any;
  baseUrl: any;
  portalName: any;
  constructor(private apiService: ReportService,
    private snackBar: MatSnackBar,
    private route: Router,
    private utility: UtilityService, private router: ActivatedRoute) {
    this.programId = this.router.snapshot.queryParamMap.get('programId');
    this.linkId = this.router.snapshot.queryParamMap.get('linkId');

    this.schoolId = this.router.snapshot.params.schoolId;
    this.router.data.subscribe(data => {
      this.apiBaseUrl = data.apibaseUrl;
      this.reportConfig = data.reportConfig;
      this.shareLinkApi = data.shareLinkApi;
      this.publicSharedBaseUrl = data.publicSharedBaseUrl;
      this.globalConfig = data.globalConfig;
      this.componentId = data.componentId;
      this.baseUrl=  data.baseUrl ;
      this.portalName = data.portalName ;
    });
  }

  ngOnInit() {
    this.utility.loaderShow();
    this.getEntityReport();
  }
  setColor() {
    let index = 0;
    let colorArray = [];
    this.entityResult.forEach(element => {
      if (element.reportType == "tableGraph") {
        let colorArrayLength = element.graphData.data[0].length;
        for (let i = 1; i < colorArrayLength;) {
          let uniqueColor = this.getRandomColor();
          if (!(colorArray.includes(uniqueColor) && uniqueColor.includes('#f'))) {
            colorArray.push(uniqueColor);
            i++;
          }

        }
        this.entityResult[index].graphData.chartOptions.colors = colorArray;
      }
      index++;
    });
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getEntityReport() {
    console.log("api called")
    this.apiService.getSingleEntityReport(this.apiBaseUrl+this.reportConfig.singleEntityReport,this.programId, this.schoolId,this.linkId).subscribe(data => {
      this.insightReport = data['result'];
      this.utility.loaderHide();
    },
      (error) => {

        //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        this.utility.loaderHide();
      })
  }
  
  naviagteToRubrics() {
    this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.insightReport.frameworkUrl.link } });
  }
}
