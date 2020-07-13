import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  baseUrl: string;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  // common get method 
  get(apiEndPoint) {
    return this.http.get(this.baseUrl + apiEndPoint)
      .pipe(catchError(this.handleError));
  }

  // common post method
  post(apiEndPoint, data) {
    return this.http.post(apiEndPoint, data)
      .pipe(catchError(this.handleError));
  }

  /*-----  To handle the Error page ----- */
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
