import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';

@Component({
  selector: 'app-highlevel-entity-report',
  templateUrl: './highlevel-entity-report.component.html',
  styleUrls: ['./highlevel-entity-report.component.scss']
})
export class HighlevelEntityReportComponent implements OnInit {
  programId;
  entityId;
  @Input() globalConfig ;
  @Input() reportConfig ; 
  @Input() apiBaseUrl;
  highLevelInsight
  headings = "headings.reportMiltipleEntityReport"
  shareLinkApi: any;
  publicSharedBaseUrl: any;
  linkId: any;
  componentId: any;
  baseUrl: any;
  portalName: any;
  solutionId: any;
  constructor(private apiService: ReportService,
    private utility: UtilityService,
    private snackBar: MatSnackBar,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.programId = this.router.snapshot.queryParamMap.get('programId');
    this.entityId = this.router.snapshot.params.entityId;
    this.solutionId = this.router.snapshot.queryParamMap.get ('solutionId');

    this.linkId = this.router.snapshot.queryParamMap.get('linkId');

    this.router.data.subscribe(data => {
      this.apiBaseUrl = data.apibaseUrl;
      this.reportConfig = data.reportConfig;
      this.shareLinkApi = data.shareLinkApi;
      this.publicSharedBaseUrl = data.publicSharedBaseUrl;
      this.globalConfig = data.globalConfig;
      this.componentId = data.componentId;
      this.baseUrl=  data.baseUrl;
      this.portalName = data.portalName;


    });
  }

  ngOnInit() {
    this.utility.loaderShow();
    this.getHighEntityReport();
  }

  getHighEntityReport() {
    this.apiService.getHighEntityReport(this.apiBaseUrl+this.reportConfig.highEntityReport,this.programId, this.solutionId, this.entityId,this.linkId).subscribe(data => {
      this.highLevelInsight = data['result'];
      const newgraphData = []

      for (const data of this.highLevelInsight['sections'][0]['subSections'][0].data) {
        let newData = Object.assign({}, data);
        let totalCountArray: Array<number> = Object.values(newData);
        totalCountArray.splice(0, 1);
        let totalcount: number = 0;
        for (let element of totalCountArray) {
          totalcount = element + totalcount;
        }

        const objKeys = Object.keys(newData);
        objKeys.splice(0, 1);
        for (const key of objKeys) {
          newData[key] = (data[key] / totalcount) * 100;
        }
        newgraphData.push(newData);
      }
      this.highLevelInsight['sections'][0]['subSections'][0]['newGraphData'] = newgraphData;
      this.utility.loaderHide();
    },
      (error) => {
        //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        this.utility.loaderHide();
      }
    )
  }
  naviagteToRubrics() {
    this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.highLevelInsight.frameworkUrl.link } });
  }
}
