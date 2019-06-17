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
  solutionId;
  constructor(
    private apiService :ApiService,
    private route :ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      this.solutionId = params['solutionId']
      //console.log(this.solutionId)
    })
   }

  ngOnInit() {

  }
  getAutoComplete(url){
   
    this.apiService.get(this.hostUrl+this.genericData.url+this.solutionId+"?id="+url).subscribe(data => {
      this.autoCompleteData = data['result'];
      console.log(this.hostUrl);
    },
    error =>{
      //console.log(error.message);
      this.autoCompleteData = [];
      console.log(this.hostUrl);

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
