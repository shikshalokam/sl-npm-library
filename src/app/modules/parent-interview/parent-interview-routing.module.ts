import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentInterviewComponent } from './parent-interview.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ParentInformationComponent } from './parent-information/parent-information.component';
const routes: Routes = [
  {
    path: '', 
     component: ParentInterviewComponent,
    data: {},
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'school-list',
        component: SchoolListComponent,
       
      },
      {
        path : 'parent-list/:name/:id',
        component : ParentListComponent,
       
      },
      {
        path : 'parent-edit/:name/:id',
        component : ParentEditComponent,
       
      },
      {
        path: 'survey/:schoolName/:schoolId/:parentId',
        component: QuestionnaireComponent
      },
      {
        path : 'parent-information/:id',
        component : ParentInformationComponent,
      },
      {
        path: '**',
        redirectTo: 'school-list'
      }
    ]
  },
  // {
  //   path: '**',
  //   redirectTo: 'parent'
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentInterviewRoutingModule { }
