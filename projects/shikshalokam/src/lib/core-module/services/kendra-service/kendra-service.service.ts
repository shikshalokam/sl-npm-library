import { Injectable } from '@angular/core';
import { CommonHttpService } from '../common-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KendraServiceService extends CommonHttpService {

  constructor( public http: HttpClient) { 
    super(http);
  }
}
