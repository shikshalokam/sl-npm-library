import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { ParentService } from '../parent-service/parent.service';
import { UtilityService } from 'dist/shikshalokam';
@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.scss']
})
export class ParentListComponent implements OnInit {
  dataSource;
  errorMessage;
  breadcrumbRoute;
  error;
  parentList;
  result;
  headings = "headings.parentListHeading";
  schoolName;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  smallScreen =false;
  

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private parentService: ParentService, private utility: UtilityService) {
    this.route.params.subscribe(params=>{
      this.schoolName = params['name'];
      this.schoolId = params['id'];
      //console.log(params)
    })
    if (window.innerWidth < 760) { // 768px portrait
      this.smallScreen = true;
    }

  }
  
  schoolId: any;
  submissionId: any;
  isProdEnvironment: string;
  atleastOneComplete: boolean;
  // displayedColumns: string[] = ['studentName','name', 'phone1','gender','address','grade','typeLabel' ,'programId','type'];
  displayedColumns: string[] = ['studentName', 'name', 'phone1', 'gender', 'typeLabel', 'callResponse','programId', 'type'];


  ngOnInit() {
    if (window.screen.width < 760) { // 768px portrait
      this.smallScreen = true;
      //console.log(this.smallScreen)
    }
    this.utility.loaderShow();
    this.breadcrumbRoute = [
      {
        label: "Parent List",
        url: "/parent/parent-list/",
        id: this.schoolId
      },
    ];
    this.showConfig();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  showConfig() {
    this.parentService.getParentList(this.schoolId)
      .subscribe(data => {
        this.parentList = data['result'];
        data['result'].forEach(element => {
          if (element['callResponse'] == 'Completed') {
            this.atleastOneComplete = true;
          }
        })
        this.result = data['result'].length;
        this.dataSource = new MatTableDataSource(data['result']);
        setTimeout(() => this.dataSource.paginator = this.paginator);
        this.utility.loaderHide();
      },
        (error) => {
          this.error = error;
          this.utility.loaderHide();
        });
  }
  parentInterviewSubmit(flag: boolean) {
    if (flag) {
      this.utility.loaderShow();
      this.parentService.getAssessmentQuestions(this.schoolId).subscribe(successData => {
        this.submissionId = successData['result'].assessments[0]['submissionId'];
        //console.log(this.submissionId);
        this.parentService.parentInterviewSubmission(this.submissionId)
          .subscribe(successData => {
            //console.log(successData);
            this.utility.loaderHide();
            this.snackBar.open(successData['message'], "Ok", { duration: 3000 });

            this.utility.onBack();
          },
            (error) => {
              this.utility.loaderHide();

              this.snackBar.open(error['message'], "Ok", { duration: 3000 });

            });
      }, (error) => {
        this.utility.loaderHide();
        this.snackBar.open(error['message'], "Ok", { duration: 3000 });
        this.error = error;
      }
      );

    }

  }
  objectKeys(obj) {
    return Object.keys(obj);
  }

}
