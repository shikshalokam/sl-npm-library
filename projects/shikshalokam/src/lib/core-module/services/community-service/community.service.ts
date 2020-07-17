import { Injectable } from '@angular/core';
import { CommonHttpService } from '../common-http.service';
import { HttpClient } from '@angular/common/http';
import { BaseConfig } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class CommunityService extends CommonHttpService {

  baseUrl: string;

  constructor(public http: HttpClient) { 
    super(http);
    // this.baseUrl = BaseConfig.baseURL
  }
}
