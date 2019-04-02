import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../../core-module/services/api-service/api.service';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompeteComponent implements OnInit {
  @Input()genericData;
  @Input()genericForm:FormGroup;
  @Input()genericEdit:boolean;
  @Input()hostUrl;
  autoCompleteData;
  id="";
  programId;
  constructor(
    private apiService :ApiService,
    private route :ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.programId = params['ProgramId']
      //console.log(this.programId)
    })
   }

  ngOnInit() {

  }
  getAutoComplete(url){
   
    this.apiService.get(this.hostUrl+this.genericData.url+this.programId+"?id="+url).subscribe(data => {
      this.autoCompleteData = data['result'];
      //console.log(data);
    },
    error =>{
      //console.log(error.message);
      this.autoCompleteData = [];
    });
  }
   inputChange(event){
    this.id=event.target.value;
    //console.log(event)
  }
  searchSchoolIdInApi(event){
    this.getAutoComplete(event);
    //console.log(event)
  }
  

}