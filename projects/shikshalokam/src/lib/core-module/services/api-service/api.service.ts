import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url : string){
    return this.http.get(url);
  }
  getJSON(url : string){
    return this.http.get( url);

  }
  post(url:string,updateData:any){
    return this.http.post(url , updateData)
  }
  upload(url: string, file : [] , name :string) {
    const formData: FormData = new FormData();
    if (file) {
      Array.from(file).forEach(f => {
            formData.append(name,f)
          })
    }
    console.log(formData)
    return this.http.post(url, formData , {reportProgress: true, observe: 'events'});
  }
}
