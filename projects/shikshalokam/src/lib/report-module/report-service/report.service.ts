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

  getListOfSchool(apiBaseUrl,programId, Id){
    return this.apiService.get(apiBaseUrl+ programId + '&blockId=' + Id);
  }
 


  getEcmReportGetSubmissionId(apiBaseUrl,schoolId) {
    return this.apiService.get(apiBaseUrl + schoolId)
  }
  getSubmissionReport(apiBaseUrl,submissionId) {
    return this.apiService.get(apiBaseUrl + submissionId)
  }
  getUserSchoolsInProgram(apiBaseUrl,programId) {
    return this.apiService.get(apiBaseUrl + programId);
  }

  getSingleEntityReport(apiBaseUrl,programId, solutionId, schoolId,linkId) {
    if(linkId){
    return this.apiService.get(apiBaseUrl + programId + '?solutionId='+solutionId +'&entity=' + schoolId+"&linkId="+ linkId);
    }
    return this.apiService.get(apiBaseUrl + programId + '?solutionId='+solutionId +'&entity=' + schoolId);
    // return this.apiService.get('/assests/insight.json');

  }
  getHighEntityReport(apiBaseUrl,programId,solutionId, schoolId , linkId) {
    if(linkId){
    return this.apiService.get(apiBaseUrl+  programId + '?solutionId='+solutionId + '&entity=' + schoolId +"&linkId="+linkId);

    }
    return this.apiService.get(apiBaseUrl+  programId + '?solutionId='+solutionId  + '&entity=' + schoolId);
    // return this.apiService.get('/assests/insight.json');
  }
 
  getMultipleEntityReport(apiBaseUrl,programId,solutionId,blockName, schoolId,linkId) {
    let url = '';
    schoolId.forEach((Id, index) => {
      if (index === 0) {
        url += schoolId[index];
      }
      else {
        url += "," + schoolId[index];
      }

    });

    if(linkId){
      return this.apiService.get(apiBaseUrl + programId + '?solutionId='+solutionId+'&entity=' +  url +'&blockName='+blockName+"&linkId="+linkId);

    }
    return this.apiService.get(apiBaseUrl + programId  + '?solutionId='+solutionId+'&entity=' +  url +'&blockName='+blockName);
    // return this.apiService.get('/assests/insight.json');
  }

  getMultipleEntityDrilldownReport(apiBaseUrl,programId,solutionId ,blockName,schoolId,linkId) {
    let url = '';
    schoolId.forEach((Id, index) => {
      if (index === 0) {
        url += schoolId[index];
      }
      else {
        url += "," + schoolId[index];
      }

    });
    if(linkId){
    return this.apiService.get(apiBaseUrl+ programId + '?solutionId='+solutionId+'&entity=' + url+'&blockName='+blockName+"&linkId="+linkId);

    }
    return this.apiService.get(apiBaseUrl+ programId + '?solutionId='+solutionId+'&entity=' +  url+'&blockName='+blockName);
    // return this.apiService.get('/assests/insight.json');
  }
}
