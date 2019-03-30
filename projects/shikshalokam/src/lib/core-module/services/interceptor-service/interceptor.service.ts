
import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable(
  {
    providedIn: 'root',
  }
)
export class ApiInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const downloadReportUrl = 'programsSubmissionStatus/DCPCR?evidenceId='
    const authToken = localStorage.getItem('auth-token');
    if(req.url.includes(downloadReportUrl))
      {
        const authReq = req.clone({setHeaders:{"internal-access-token" : localStorage.getItem('downloadReport-token')}});
        return next.handle(authReq);
      }
      const authReq = req.clone({ setHeaders: { "X-authenticated-user-token": authToken } })
        return next.handle(authReq) .pipe(
          catchError( (error: HttpErrorResponse) => { 
             let errMsg = '';
             // Client Side Error
             if (error.error instanceof ErrorEvent) {        
               errMsg = `Error: ${error.error.message}`;
             } 
             else {  // Server Side Error
               errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
             }
             
             return throwError(errMsg);
           })
        )
  } 
  
}
