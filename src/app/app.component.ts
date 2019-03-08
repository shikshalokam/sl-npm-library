import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '../../dist/shikshalokam';
import { AuthService } from './modules/private-modules/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn :boolean;
 
 
  programId;
  assessmentId;
  // links ;
  opened = true;
  pushMode = 'side';
  currentUser;
  logo =" ./assets/shikshalokam.png";
  links = [  
    { 
      linkHeading : "headings.features",
      options:[
        {
          value : "headings.parentInterview",
          
            anchorLink : "parent"
        },
        {
          value :"headings.reports",
            anchorLink:"report"
        },
        {
          value :"headings.configurations",
            anchorLink:"configuration"
        }
      ]
      }
  ] 

  constructor(private route : ActivatedRoute,private authService :AuthService ,private translate: TranslateService) {
    translate.use('en').then(() => {
    
    });
    if (window.screen.width < 760) { // 768px portrait
      this.opened = false;
      this.pushMode = 'push';
    }
    this.currentUser = this.authService.getCurrentUserDetails();
    console.log(this.isLoggedIn +"islogin");
    this.isLoggedIn = this.currentUser ? true: false;
    console.log(this.isLoggedIn)
  }
  ngOnInit() {

  }
   
  onLogout(){
    this.authService.getLogout();
  }
  onLogin(){
    console.log("hiii");
    this.authService.getLogin();
  }
  onResize(event)
  {
    if(event.target.innerWidth < 760)
    {
      this.opened = false;
      this.pushMode = 'push';
    }
    else{
      this.opened = true;
      this.pushMode = 'side';

    }
  } 
}

