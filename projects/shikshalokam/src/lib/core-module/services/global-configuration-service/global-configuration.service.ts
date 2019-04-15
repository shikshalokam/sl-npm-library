
import { Injectable } from "@angular/core";
import { ApiService } from "../api-service/api.service";
@Injectable(
  {
    providedIn: 'root',
  }
)
export class GlobalConfigurationService {
roleAcess = [];
    constructor(private apiService:ApiService){

    }

    getRolePermission(url){
       return this.apiService.get(url);
    }
    getUniqueRoleAcessObject(result,currentPortal){
        let currentTabAction ;
        this.roleAcess = [];

        result['tabActions'].forEach( element => {
          if(element.id === currentPortal) {
            currentTabAction = element;
          }
        });
        this.getUniqueRoleAcess(currentTabAction);
        return this.roleAcess;
      } 
    getUniqueRoleAcess(currentTabAction){
        currentTabAction['tabActions'].forEach ( element => {
          if(element.accessibility === true){
          this.roleAcess.push(element.id);
          }
          if(element.tabActions) {
            this.getUniqueRoleAcess(element);
          }
        })
      }


}
