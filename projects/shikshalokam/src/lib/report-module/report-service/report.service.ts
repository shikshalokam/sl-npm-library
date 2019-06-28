import { Injectable } from '@angular/core';
import { ApiService } from '../../core-module/services/api-service/api.service';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private apiService: ApiService) { }
  

  getListOfBlock(apiBaseUrl , programId){
    return this.apiService.get(apiBaseUrl + programId);
  }

  getListOfentityl(apiBaseUrl,programId, Id){
    return this.apiService.get(apiBaseUrl+ programId + '&blockId=' + Id);
  }
 


  getEcmReportGetSubmissionId(apiBaseUrl,entitylId) {
    return this.apiService.get(apiBaseUrl + entitylId)
  }
  getSubmissionReport(apiBaseUrl,submissionId) {
    return this.apiService.get(apiBaseUrl + submissionId)
  }
  getUserentitylsInProgram(apiBaseUrl,programId) {
    return this.apiService.get(apiBaseUrl + programId);
  }

  getSingleEntityReport(apiBaseUrl,programId, solutionId, entitylId,linkId) {
    if(linkId){
    return this.apiService.get(apiBaseUrl + programId + '?solutionId='+solutionId +'&entity=' + entitylId+"&linkId="+ linkId);
    }
    return this.apiService.get(apiBaseUrl + programId + '?solutionId='+solutionId +'&entity=' + entitylId);
    // return this.apiService.get('/assests/insight.json');

  }
  getHighEntityReport(apiBaseUrl,programId,solutionId, entitylId , linkId) {
    if(linkId){
    return this.apiService.get(apiBaseUrl+  programId + '?solutionId='+solutionId + '&entity=' + entitylId +"&linkId="+linkId);

    }
    return this.apiService.get(apiBaseUrl+  programId + '?solutionId='+solutionId  + '&entity=' + entitylId);
    // return this.apiService.get('/assests/insight.json');
  }
 
  getMultipleEntityReport(apiBaseUrl,programId,solutionId,blockName, entitylId,linkId) {
    let url = '';
    entitylId.forEach((Id, index) => {
      if (index === 0) {
        url += entitylId[index];
      }
      else {
        url += "," + entitylId[index];
      }

    });

    if(linkId){
      return this.apiService.get(apiBaseUrl + programId + '?solutionId='+solutionId+'&entity=' +  url +'&blockName='+blockName+"&linkId="+linkId);

    }
    return this.apiService.get(apiBaseUrl + programId  + '?solutionId='+solutionId+'&entity=' +  url +'&blockName='+blockName);
    // return this.apiService.get('/assests/insight.json');
  }

  getMultipleEntityDrilldownReport(apiBaseUrl,programId,solutionId ,blockName,entitylId,linkId) {
    let url = '';
    entitylId.forEach((Id, index) => {
      if (index === 0) {
        url += entitylId[index];
      }
      else {
        url += "," + entitylId[index];
      }

    });
    if(linkId){
    return this.apiService.get(apiBaseUrl+ programId + '?solutionId='+solutionId+'&entity=' + url+'&blockName='+blockName+"&linkId="+linkId);

    }
    return this.apiService.get(apiBaseUrl+ programId + '?solutionId='+solutionId+'&entity=' +  url+'&blockName='+blockName);
    // return this.apiService.get('/assests/insight.json');
  }
}
