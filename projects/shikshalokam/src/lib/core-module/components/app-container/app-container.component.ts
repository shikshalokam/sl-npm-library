import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector:"app-container",
    templateUrl:'./app-container.component.html',
    styleUrls:['./app-container.component.scss']
})

export class AppContainerComponent implements OnInit{
    showDropdown = false;
    @Input() url;
    apps;

    constructor(){
        
    }
    ngOnInit(){
        this.apps=[
            {    
              icon:" assignment_turned_in",
              tooltip:"Assessments",
              url:this.url
            },
            {    
              icon:"school",
              tooltip:"Learning",
              url:this.url+"/assessments/learning"
            },
            {    
              icon:"dashboard",
              tooltip:"Programs",
              url:this.url+"/programs"
            }
          ]
    }

    openDropdown() {
        this.showDropdown = !this.showDropdown;
      }

      navigate(url){
        window.open(url, "_blank");
      }
      
      getClass(name){
        // let currentUrl =window.location.href;
        // if(currentUrl.includes(name.toLowerCase())){
        //   return 'active'
        // }else{
        //   return 'inactive'
        // }
        
        if(name == localStorage.getItem("portalName")){
          return 'active'
        }else{
          return 'inactive'
        }
        
      }

}


