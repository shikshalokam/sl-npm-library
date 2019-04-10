import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from '../report-service/report.service';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';

@Component({
  selector: 'app-multiple-entity-drilldown-report',
  templateUrl: './multiple-entity-drilldown-report.component.html',
  styleUrls: ['./multiple-entity-drilldown-report.component.scss']
})
export class MultipleEntityDrilldownReportComponent implements OnInit {
  mutipleEntity;
  programId ;
  headings = "heading.reportMultilpeEntityDrillldownReport";
  schoolId ;
  blockName;
  @Input()reportConfig: any;
  @Input()apiBaseUrl: any;
  shareLinkApi: any;
  publicSharedBaseUrl: any;
  constructor(
    private reportService: ReportService,
    private utility: UtilityService,
    private snackBar: MatSnackBar,
    private route: Router,
    private router : ActivatedRoute
  ) { }

  ngOnInit() {
    this.utility.loaderShow();
    this.router.queryParams.subscribe( params =>{
      this.schoolId = params['school'];
      this.programId = params['ProgramId'];
      this.blockName = params['blockName'];
    })
    this.router.data.subscribe(data => {
      this.apiBaseUrl = data.apibaseUrl;
      this.reportConfig = data.reportConfig;
      this.shareLinkApi = data.shareLinkApi;
      this.publicSharedBaseUrl = data.publicSharedBaseUrl;
    });
    this.getMultiEntityDrillReport();
  }
  getMultiEntityDrillReport() {
    this.reportService.getMultipleEntityDrilldownReport(this.apiBaseUrl+this.reportConfig.multiEntityDrillDownLevelReport,this.programId,this.blockName, this.schoolId).subscribe(successData => {
      this.mutipleEntity = successData['result'];
      this.createNewData();
      console.log(this.mutipleEntity);
      this.utility.loaderHide();
    })
  }
  url = "PROGID01?school="
  createNewData() {


    this.mutipleEntity.sections.forEach((element, sectionIndex) => {
      element.subSections.forEach((subSections, subSectionsIndex) => {
        this.mutipleEntity.sections[sectionIndex].subSections[subSectionsIndex]['tableScroll']= true;
        // this.mutipleEntity.sections[sectionIndex].subSections[subSectionsIndex]['graphData'].chartType = 'LineChart';
        // let newgraphData = [];
        // for (const data of this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex].data) {
        //   let newData = Object.assign({}, data);
        //   let totalCountArray: Array<number> = Object.values(newData);
        //   totalCountArray.splice(0, 1);
        //   let totalcount: number = 0;
        //   for (let element of totalCountArray) {
        //     totalcount = element + totalcount;
        //   }

        //   const objKeys = Object.keys(newData);
        //   objKeys.splice(0, 1);
        //   for (const key of objKeys) {
        //     newData[key] = (data[key] / totalcount) * 100;
        //   }
        //   newgraphData.push(newData);
        // }
        // this.mutipleEntity['sections'][sectionIndex]['subSections'][subSectionsIndex]['newGraphData'] = newgraphData;
      });

    });

  }
  naviagteToRubrics() {
    this.route.navigate(["/report/framework-rubric"], { queryParams: { link: this.mutipleEntity.frameworkUrl.link } });
  }
}
