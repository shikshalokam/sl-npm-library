import { Injectable } from '@angular/core';
import { ApiService } from '../../core-module/services/api-service/api.service';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
   Url;

  constructor(private apiService :ApiService) { }
 

  applyFilters(url){

    return this.apiService.get(url);
  }
  getUserSummary(url){

    return this.apiService.get(url);
  }
  getSchoolReport(url){

    return this.apiService.get(url);
  }
  getAssessorReport(url){

    return this.apiService.get(url);
  }


  getUserProfileSummary(programId){
    return this.apiService.get(programId);
  }
}