import { Component, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UtilityService } from 'dist/shikshalokam';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { ParentService } from '../parent-service/parent.service';

@Component({
  selector: 'app-parent-edit',
  templateUrl: './parent-edit.component.html',
  styleUrls: ['./parent-edit.component.scss']
})
export class ParentEditComponent implements OnInit {
  sendUrl;
  parentEditData;
  updateData
  parentForm:FormGroup;
  isEdit = false;
  breadcrumbRoute ;
  schoolId;
  error;
  schoolName;
  headings = 'headings.parentInfoHeading';
  constructor(private location: Location,private snackBar :MatSnackBar,private route :ActivatedRoute,private utility : UtilityService ,private parentService :ParentService , ) { 
    this.route.params.subscribe(params => {
      this.sendUrl = params["id"];
      this.schoolName =params["name"];
      //console.log(this.sendUrl)
  });

  this.showConfig(); 
  }
  ngOnInit() {
    this.utility.loaderShow();

    
    this.breadcrumbRoute = [ 
      {
        label : "Parent List",
        url : "/parent/parent-list/",
        id: this.schoolId
      },
      {
        label : "Parent Information",
        url : "/parent/parent-edit/",
        id: this.sendUrl
      }
  ];
  }
    showConfig() {

  this.parentService.getParentInfo(this.sendUrl)
      .subscribe(data => {
        //console.log(data);
        this.parentEditData = data['result'];
        // this.parentEditData.forEach( element => {
        //   if(element['field'] == "callResponse")
        //     {
        //       element.visible = false ;
        //       //console.log(element.visible);
        //     }
        // });
        //console.log(data['result']);
        this.parentForm = this.utility.toGroup(data['result']) ;
        //console.log(this.parentForm);
        this.utility.loaderHide();
      },
      (error) => {
        this.error = error;
      this.utility.loaderHide();
      }
      );
}
  getUpdateData(){
  this.updateData = this.parentForm.getRawValue(); 
  //console.log(this.updateData)
    this.parentService.postParentData(this.sendUrl,this.updateData).
    subscribe(data => {
      //console.log(data);
      this.snackBar.open(data['message'], "Ok", {duration: 3000});
    
   },
   (error)=>{
    this.snackBar.open(error['message'], "Ok", {duration: 3000});

   });
   this.isEdit=!this.isEdit;
  }
  onEdit(){
    this.isEdit = !this.isEdit ;
  }
  onCancel(){
    this.location.back();
  }
} 
