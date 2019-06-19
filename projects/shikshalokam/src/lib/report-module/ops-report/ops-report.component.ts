import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAccordion, MatSnackBar } from '@angular/material';
import * as jspdf from 'jspdf';

import html2canvas from 'html2canvas';
import { OperationsService } from '../operations-service/operations.service';
import { CamelCasePipe } from '../../core-module/pipes/camelcase-pipe/camelcase.pipe';
import { UtilityService } from '../../core-module/services/utility-service/utility.service';

@Component({
  selector: 'app-ops-report',
  templateUrl: './ops-report.component.html',
  styleUrls: ['./ops-report.component.scss']
})
export class OpsReportComponent implements OnInit {
  reportGenerate = false;
  entityPageIndex = 0;
  assessorPageIndex = 0;
  entityGraph;
  assessorGraph;

  headings = 'headings.opsReport'
  currentUser;
  dynamicResize;
  columnNames;
  searchEntityId;
  filterData;
  maxDate = new Date();
  filterForm: FormGroup;
  queryParamsUrl = '';
  searchEntityValue: string = '';
  searchAssessorName: string = '';
  filterObject: any;
  filterArray;
  entityReport: Object;
  itemsPerPage = [10, 15, 20];
  searchParam: string = '';
  assessorReport: any;
  summaryData: any;
  pageParam: any;
  pageReload = true;
  summaryGraph: object = {};
  entityPageLimit: any = 10;
  assessorPageLimit: any = 10;
  expandedFilters: boolean = true;
  entityLoading: boolean;
  assessorLoading: boolean;
  @Input() hostUrl;
  @Input() globalConfig;
  @ViewChild('myaccordion') filterPanel: MatAccordion;
  summaryProfileData: any;
  currentRouterUrl: string = '';
  queryParamsRouterUrl: string = '';
  apiBaseUrl: any;
  reportConfig: any;
  linkId;
  share: any;
  publicSharedBaseUrl: any;
  shareLinkApi: any;
  noAssess: any;
  componentId: any;
  baseUrl: any;
  portalName: any;
  urlQueryParams: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _fb: FormBuilder,
    private operationService: OperationsService,
    private utility: UtilityService,
    private snackBar: MatSnackBar
  ) {
    this.route.data.subscribe(data => {
      this.apiBaseUrl = data.apibaseUrl;
      this.reportConfig = data.reportConfig
      this.shareLinkApi = data.shareLinkApi;
      this.publicSharedBaseUrl = data.publicSharedBaseUrl;
      this.globalConfig = data.globalConfig;
      this.noAssess = data.noAssess;
      this.componentId = data.componentId;
      this.hostUrl = data.apibaseUrl;
      this.baseUrl = data.baseUrl;
      this.portalName = data.portalName;
    })
    this.filterForm = this._fb.group({
      formDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });
  }

  pdf(id) {
    var data = document.getElementById(id);
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save(id + '.pdf');
    });
  }

  ngOnInit() {
    this.currentRouterUrl = window.location.href;
    this.route.queryParams.subscribe(params => {
      let param = Object.assign({}, params);
      this.pageParam = params;
      console.log(params);
      this.utility.loaderShow();
      this.linkId = params['linkId'];
      this.getUserProfile(params['solutionId']);
      this.filters(params['solutionId']);
      this.applyFilter(this.pageParam);
      this.urlQueryParams = Object.assign({}, params);
      delete param.solutionId;
      if (Object.keys(param).length) {
        this.generateReport(param);
        this.expandedFilters = false;
      } else {
        this.filterForm.reset();
        this.expandedFilters = true;
        this.reportGenerate = false;
        this.assessorReport = [];
        this.entityReport = [];
        this.summaryData = {};
      }
    });


    // this.route.queryParams.subscribe(params => {
    //   this.pageParam = params;
    //   this.utility.loaderShow();
    //   this.linkId = params['linkId'];
    //   this.getUserProfile(params['solutionId']);
    //   this.filters(params['solutionId']);
    //   this.applyFilter(this.pageParam);

    //   // if (this.pageReload) {
    //     if (Object.keys(params).length > 1) {
    //       // let param = Object.assign({}, params);
    //       // delete param['solutionId'];
    //       // delete param['componentName'];
    //       // this.applyFilter(param);
    //       // this.expandedFilters = false;
    //       this.reportGenerate = true;
    //     }
    //     // this.pageReload = false;
    //   // }
    // })
  }

  filterApply(condition) {
    //console.logcondition)
    if (condition === 'reset') {
      this.filterForm.reset();
      // this.router.navigate(['/operations/reports'], { queryParams: { solutionId: this.pageParam['solutionId'] } });
      this.reportGenerate = false;
      this.filterArray = [];
      const keys = Object.keys(this.urlQueryParams);
      const obj = {}
      for (const key of keys) {
        obj[key] = null
      }
      obj['solutionId'] = this.pageParam.solutionId;
      this.applyFilter(obj);
      // this.route.queryParams.subscribe(params => {
      //   if(this.noAssess){
      //     let resetUrl = '/programs/public/ops-reports?solutionId=' + params['solutionId']
      //     window.history.pushState({ path: resetUrl }, '', resetUrl);
      //   }
      //   else{
      //   let resetUrl = '/programs/operations/ops-reports?solutionId=' + params['solutionId']
      //   window.history.pushState({ path: resetUrl }, '', resetUrl);
      //   }
      // })
    }
    else {
      // this.filterPanel.closeAll();
      this.pageReload = false;
      this.expandedFilters = !this.expandedFilters;
      this.filterObject = this.filterForm.getRawValue();
      for (let filter in this.filterObject) {
        if (this.filterObject[filter] === null || this.filterObject[filter] === undefined || this.filterObject[filter] === "" || this.filterObject[filter] === "aN-aN-NaN") {
          delete this.filterObject[filter];
        }
      }
      if (this.filterObject.toDate) {
        // this.filterObject['fromDate']= this.applyDate(this.filterObject.fromDate)
        this.filterObject['toDate'] = this.applyDate(this.filterObject.toDate);

      }
      if (this.filterObject.fromDate) {
        this.filterObject['fromDate'] = this.applyDate(this.filterObject.fromDate);
        // this.filterObject['toDate']= this.applyDate(this.filterObject.toDate);

      }
      this.applyFilter(this.filterObject)
      this.filterArray = Object.entries(this.filterObject)
    }
  }


 
  mapGraphObject(data, type = 'call') {

    if (type === 'call') {

      data.forEach((object, ind) => {
        console.log(object)
        for (let i = 0; i < object.graphData.length; i++) {

          const dataArray = this.getData(object, i)
          Object.assign(data[ind].graphData[i], {
            data: dataArray
          })
          Object.assign(data[ind].graphData[i].chartOptions, { legend: { position: 'top', alignment: 'end' } })

        }
        object.graphData.forEach((item, index) => {

          if (object.graphData[index].data.length > 2 && object.graphData[index].chartType === 'ColumnChart') {
            Object.assign(data[ind].graphData[index].chartOptions, {
              isStack: true,
            })
          }

          if (data[ind].graphData[index].data.length > 10) {
            Object.assign(data[ind].graphData[index].chartOptions.hAxis, { textPosition: 'none' });
          }
          let colNameArray = []
          data[ind].graphData[index].columnNames.forEach(column => {
            colNameArray.push(new CamelCasePipe().transform(column));
          });
          Object.assign(data[ind].graphData[index], { columnNames: colNameArray });


        });

        new CamelCasePipe().transform('entityList')
        const headers = this.getTableHeader(object);
        Object.assign(data[ind], { tableHeader: headers })
      });
      ////console.logdata)
      return data;
    }
    else {
      for (let i = 0; i < data.graphData.length; i++) {

        const dataArray = this.getData(data, i);
        Object.assign(data.graphData[i], {
          data: dataArray
        })
        Object.assign(data.graphData[i].chartOptions, { legend: { position: 'top', alignment: 'end' } })

      }
      data.graphData.forEach((item, index) => {

        if (data.graphData[index].data.length > 2 && data.graphData[index].chartType === 'ColumnChart') {
          Object.assign(data.graphData[index].chartOptions, {
            isStack: true,
          })
        }

        if (data.graphData[index].data.length > 10) {
          Object.assign(data.graphData[index].chartOptions.hAxis, { textPosition: 'none' });
        }
        let colNameArray = []
        data.graphData[index].columnNames.forEach(column => {
          colNameArray.push(new CamelCasePipe().transform(column));
        });
        Object.assign(data.graphData[index], { columnNames: colNameArray });


      });

      new CamelCasePipe().transform('entityList')
      const headers = this.getTableHeader(data);
      Object.assign(data, { tableHeader: headers })

      console.log(data.graphData);
    
      return data.graphData;
    }
  }

  getTableHeader(object) {
    let headingArray = []
    object.tabularData.headers.forEach(header => {
      headingArray.push(header.name);
    })
    return headingArray;
  }

  getData(object, i) {
    let dataArray = [];
    for (let j = 0; j < object.data.length; j++) {
      let columnArray = this.getColumn(object, i, j);
      dataArray.push(columnArray);
    }
    return dataArray;
  }

  getUserProfile(solutionId) {
    this.operationService.getUserProfileSummary(this.apiBaseUrl + this.reportConfig.profileSummary + solutionId).subscribe(data => {
      ////console.logdata);
      this.summaryProfileData = data['result'];
      const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
          obj[item[keyField]] = item
          return obj
        }, {})
      this.summaryProfileData = arrayToObject(this.summaryProfileData, "label")
      if (this.noAssess) {
        this.utility.loaderHide();

      }
    },
      error => {

        //this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
        this.utility.loaderHide();

      });
  }
  getColumn(object, i, j) {
    let colArray = [];
    object.graphData[i].columnNames.forEach((column, index) => {
      column = column.trim();
      if (index > 0) {
        if (object.data[j][column] === "") {

          colArray.push(0);
        }
        else {
          colArray.push(Math.round(object.data[j][column]));
        }
      }
      else {
        colArray.push(object.data[j][column]);
      }

    }
    );
    return colArray;
  }
  applyDate(value) {
    var date = new Date(value),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    const val = [day, mnth, date.getFullYear()].join("-");
    return val;
  }

  applyFilter(obj) {
    let navigationExtras: NavigationExtras = {
      queryParams: obj,
      relativeTo: this.route,
      queryParamsHandling: 'merge',
    };
    this.router.navigate([], navigationExtras);
  }

  inputChange(key, event) {
    this.applyFilter({ [key]: event.target.value });
    if (key == 'entityId') {
      this.searchEntityId = event.target.value;
    }
  }
  selectType(key, value) {
    this.applyFilter({ [key]: value })

  }
  generateReport(param) {
  
    this.queryParamsUrl = this.pageParam['solutionId'] + "?";
    let paramKey = Object.keys(param);
    if (paramKey.includes('componentName')) {
      paramKey.splice(paramKey.indexOf('componentName'), 1)

    }
    let index = 0;
    
    if (paramKey.includes('solutionId')) {
      paramKey.splice(paramKey.indexOf('solutionId'), 1)

    }
    paramKey.forEach((element, index) => {
      index ? this.queryParamsUrl += '&' + element + '=' + param[element] : this.queryParamsUrl += element + '=' + param[element]
    })
   
    this.reportGenerate = true;
    console.log("generate report")
    this.reportsDataFetch();

  }
  downloadCsv(id) {
    if (id === 'entity') {
      this.operationService.getEntityReport(this.apiBaseUrl + this.reportConfig.entityReport + this.pageParam['solutionId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe(data => {

      },
        error => {
          this.download(error, id)
        });
    }
    else if (id === 'assessor') {
      this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.pageParam['solutionId'] + "?fromDate=" + this.pageParam['fromDate'] + "&toDate=" + this.pageParam['toDate'] + "&csv=" + true).subscribe(data => {

      },
        error => {
          this.download(error, id)
        });

    }
  }

  download(object, id) {
    if (object.status == 200) {
      const blob = new Blob([object.error.text], { type: 'csv' });
      const url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = `${id}-Report.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } else {
      this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
    }
  }

  setSearchParam(index: number = 1, size: number = this.itemsPerPage[0], label) {
    let url = '&page=' + index + '&limit=' + size;
    url = url + (label === 'entity' ? '&entityName=' + this.searchEntityValue : '&assessorName=' + this.searchAssessorName);
    return url;

  }
  pageResponse(event) {
    this[event.label + 'PageLimit'] = event.pageLimit;
    this[event.label + 'PageIndex'] = event.pageIndex;
    console.log(event)
    this.searchParam = this.setSearchParam(this[event.label + 'PageIndex'] + 1, this[event.label + 'pageLimit'], event.label);
    if (event.label === 'entity') {
      this.getEntityReport();
    } else {
      this.getAssessorReport();

    }
  }
  reportsDataFetch() {
    this.utility.loaderShow();
    this.getUserSummary(this.queryParamsUrl);
    this.searchParam = this.setSearchParam(this.entityPageIndex + 1, this.entityPageLimit, 'entity');
    this.getEntityReport();
    this.searchParam = this.setSearchParam(this.assessorPageIndex + 1, this.assessorPageLimit, 'assessor');
    this.getAssessorReport();
  }

  filters(url) {
    if (!this.pageParam.linkId) {
      this.operationService.applyFilters(this.apiBaseUrl + this.reportConfig.reportFilter + url).subscribe(data => {
        this.filterData = this.mapQueryParams(data['result']);
        this.filterForm = this.utility.toGroup(this.filterData);
        ////console.logthis.filterForm)
        this.filterObject = this.filterForm.getRawValue()
        for (let filter in this.filterObject) {
          if (this.filterObject[filter] === null || this.filterObject[filter] === undefined || this.filterObject[filter] === "" || this.filterObject[filter] === "aN-aN-NaN") {
            delete this.filterObject[filter];
          }
        }
        this.filterArray = Object.entries(this.filterObject);
        this.utility.loaderHide();
      },
        error => {
          this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
          this.utility.loaderHide();
        });
    }
  }
  mapQueryParams(data) {
    let param;
    this.route.queryParams.subscribe(params => {
      param = params;
    })
    let paramKey = Object.keys(param);
    paramKey.forEach(paramLabel => {
      data.forEach((element, index) => {
        if (element.field === paramLabel) {
          if (element.input === 'date') {
            let date = [param[paramLabel].substring(6), param[paramLabel].substring(3, 5), param[paramLabel].substring(0, 2)].join("-");
            data[index].value = date + 'T00:00:00.000Z';
          }
          else {
            data[index].value = param[paramLabel];
          }
        }
      });
    });
    return data;
  }

  getUserSummary(url) {
    this.operationService.getUserSummary(this.apiBaseUrl + this.reportConfig.reportSummary + url).subscribe(data => {
      this.summaryData = data['result'];
      const arrayToObject = (array, keyField) =>
        array.reduce((obj, item) => {
          obj[item[keyField]] = item
          return obj
        }, {})
      this.summaryData = arrayToObject(this.summaryData, "label")
      this.utility.loaderHide();
    },
      error => {
      }
    );
  }

  getEntityReport(label = 'call') {
    this.entityLoading = true;
    this.operationService.getEntityReport(this.apiBaseUrl + this.reportConfig.entityReport + this.queryParamsUrl + this.searchParam).subscribe(data => {
      this.share = data['result'];
      if (label == 'call') {
        this.entityReport = this.mapGraphObject(data['result']['sections']);
      }
      else {
        this.entityReport[0].data = data['result']['sections'][0]['data'];
        this.entityReport[0].graphData = this.mapGraphObject(data['result']['sections'][0], 'search')
      }
      this.entityLoading = false;

    }, error => {
    }
    );
  }

  getAssessorReport(label = 'call') {
    this.assessorLoading = true;
    this.operationService.getAssessorReport(this.apiBaseUrl + this.reportConfig.assessorReport + this.queryParamsUrl + this.searchParam).subscribe(data => {
      if (label == 'call') {
        this.assessorReport = this.mapGraphObject(data['result']['sections']);
      }
      else {
        this.assessorReport[0].data = data['result']['sections'][0]['data'];
        this.assessorReport[0].graphData = this.mapGraphObject(data['result']['sections'][0], 'search')
      }
      this.assessorLoading = false;

    }, error => {
    }
    );
  }
  searchEntityIdInApi(searchId) {
  }

  searchVal(id, searchValue) {
    if (id == 'entity') {
      this.searchEntityValue = searchValue.target.value;
    }
    else if (id == 'assessor') {
      this.searchAssessorName = searchValue.target.value;
    }
  }

  searchInApi(label, value) {
    this[`${label}+PageIndex`] = 1;
    this.searchParam = this.setSearchParam(this[`${label}PageIndex`], this[`${label}PageLimit`], label);
    if (label === 'entity') {
      this.searchEntityValue = value
      this.getEntityReport('search');
    } else {
      this.searchAssessorName = value
      this.getAssessorReport('search');
    }

  }
}
