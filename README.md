# Portal Library
   
   
   # coreModule
core module is a module which have almost all the common functionality and 
component used throughout the project like common services,pipe,components.
there are 4 components i.e is Navbar component(header component) , sidenavbar 
,responsive navnbar component ,program sidebar  


* Navbar / Responsive navbar  :-
  selector  :-     <app-navbar></app-navbar>
  
  @input variables:-
  @Input() currentUser: {}; // will have the current user 
  @Input() logo ;
  @Output() Logout = new EventEmitter (); 
  
  
  <app-navbar [currentUser]="userDetails" [logo]="*path of image*" [Logout]="want to call a function when
                                                              the the logout signout" ></app-navbar> 
  
  <app-responsive-navbar [currentUser]="userDetails" [logo]="*path of image*" [Logout]="want to call a function when
                                                              the the logout signout" ></app-responsive-navbar> 

* Side Navbar :-
it is for side navigation in your project .

input fields are 
@input link = [ 
                  {
                   value :"headings.reports",    label which you want to show.
                    anchorLink:"report" //  path of the component where you want to naivigate
                    
                      }
          ] ;
          
@input programsShow : boolean ; // will show the programs back button which will navigate to programs page .

 <app-sidenav [link] = "link" [programsShow]="false" ></app-sidenav>
   
   
   
   
 Different services  :-
 
Utility service :- 
//used for showing of loader and hiding creating formsArray Na FormGroup etc .
Methods :-
  onBack(){} // will go to the previous page which  the browser visit
  loaderShow(){ } //will show the loader 
  loaderHide(){}  //will hide the loader 
  toGroup(inputs) {} //will return a Form Group
  createFormArray(inputs){} // will return a form Array


Translate Service :-

//user to set the language which is used by the default Json file in translate-pipe.

methods : - 
  
  use('Language').then(() => {}); // should be initially set a language ex if a file have   en.json then instead oof language                                 it should be en only as shown below.
                                 translate.use('en').then(() => {

                                  });



Api-Interceptor :- 
// used to set the authorization header which is used to acess private api.



Api-Service :-

//which is basically a common service which is used for acessing the api  but u need to subscribe in your code where you are using the code.  


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
  
  
  
  
  
  
  
  *  It consist of diffrent pipe like translate,blank,camelcase. 
  {{value  | translate }}   will return the corresponding value in the json or ese the same which is assigned to it
                              example : - {{ 'yourName' | translate }}
                                  it will return as the value which is stored in your json which is assigned with the                                     translate service & nad it will accept a string always.
                                  
                                  
  {{ value | blank }}   will return -NA- if the value is blank or else the same .
                              example : - {{ yourName | blank }}
                                  it will return as YourName.
                                   {{ '' | blank }}
                                  it will return as -NA-
                                  
                                  
                                  
  {{ value | camelCase  }} // will return the camelcase word by spliting it into normal with the initial letter capital .
                              example : - {{ yourName | camleCase }}
                                  it will return as Your Name.
                                  
                                  
                                  
                                  
 Note:- for using this pipe you should import the coreModule into your parent module and if service then you have to call those explicitly from shikshalokam.
 
 
 
 @NgModule({
  declarations: [
     CoreModule
     ]   << this.
 
 
 import { CoreModule } from 'shikshalokam'; 
 


#sharedModule :-


      shared module have a number of reusable component which is cmpletely dynamic , some services and directive .
      
      list of components in shared module :-
        dashboard-blocks,dialogue-box,dropdown-field,dynamic-form,form-array-field,image-card,loader,number-field,parent-           heading,select-field,text-field,textarea-field,
        
        list of services :-
        resource-service
        
        List of Directive :-
        search-directive
        
      
        syntax  :-
        
          components :-
          
            dahsboard-blocks :- <dashboard-block>
                              
