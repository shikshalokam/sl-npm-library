import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, Sort, MatSnackBar } from '@angular/material';
import { ReportService } from '../../../report-service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from 'projects/shikshalokam/src/lib/core-module/services/utility-service/utility.service';
@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {
  headings = 'headings.schoolListHeading';
  programId;
  searchVal;
  displayedColumns: string[] = ['name', 'city', 'state', 'action', 'action1'];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  reportConfig: any;
  apiBaseUrl: any;
  globalConfig: any;
  constructor(private apiService: ReportService,
    private snackBar :MatSnackBar,
    private utility :UtilityService,
     private router: ActivatedRoute, private route: Router) {
    this.programId = this.router.snapshot.queryParamMap.get('ProgramId');
    this.router.data.subscribe(data => {
      this.apiBaseUrl = data.apibaseUrl;
      this.reportConfig = data.reportConfig
    });
  }

  ngOnInit() {
    this.utility.loaderShow();
    this.getSchoolList();
  }

  applyFilter(filterValue: string) {
    this.searchVal = filterValue;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getSchoolList() {
    this.apiService.getUserSchoolsInProgram( this.apiBaseUrl+this.apiBaseUrl.reportConfig.userSchoolsInProgram , this.programId).subscribe(successData => {
      this.dataSource =  new MatTableDataSource(successData['result'].schools);
      setTimeout(() => this.dataSource.sort = this.sort);
      setTimeout(() => this.dataSource.paginator = this.paginator);
      
    }, error => {

      this.snackBar.open(this.globalConfig.errorMessage, "Ok", { duration: 9000 });
      this.utility.loaderHide();
    })
  }

  navigateToEntityReport(schoolId) {
    // this.route.n
    this.route.navigate(['/report/entity-report/'+schoolId], { queryParams: {ProgramId: this.programId} });
  }
  navigateToHighEntityReport(schoolId){
    this.route.navigate(['/report/highlevel-entity-report/'+schoolId], { queryParams: {ProgramId: this.programId} });

  }

}
