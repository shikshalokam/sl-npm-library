import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownFieldComponent } from './components/dropdown-field/dropdown-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule, MatCardMdImage, MatCardModule, MatTooltipModule, MatDatepickerModule, MatAutocompleteModule } from '@angular/material';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ParentHeadingComponent } from './components/parent-heading/parent-heading.component';
import { CoreModule } from '../core-module/core.module';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { FormArrayFieldComponent } from './components/form-array-field/form-array-field.component';
import { SearchDirective } from './directives/search-directive/search.directive';
import { DashboardBlocksComponent } from './components/dashboard-blocks/dashboard-blocks.component';
import { ResourceService } from './services/resource-service/resource.service';
import { ProgramsDashboardComponent } from './components/programs-dashboard/programsDashboard.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumbs.component';
import { BreadcrumbsService } from './services/breadcrumb-service/breadcrumbs.service';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AutoCompeteComponent } from './components/auto-complete/auto-complete.component';
@NgModule({
  declarations: [
    ProgramsDashboardComponent,
    DynamicFormComponent,
    DialogBoxComponent,
    TextFieldComponent, 
    DropdownFieldComponent, 
    NumberFieldComponent, 
    TextareaFieldComponent,
    ParentHeadingComponent, 
    ImageCardComponent, 
    LoaderComponent, 
    SelectFieldComponent, 
    FormArrayFieldComponent, 
    SearchDirective, 
    DashboardBlocksComponent,
    BreadcrumbComponent,
    PaginationComponent,
    AutoCompeteComponent,
    DatePickerComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    RouterModule,
    CoreModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    MatCardModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatAutocompleteModule,

  ],
  entryComponents: [DialogBoxComponent],
  exports : [
    DynamicFormComponent,
    NgxSpinnerModule,
    ParentHeadingComponent, 
    MatSnackBarModule,
    ImageCardComponent,
    LoaderComponent,
    SearchDirective,
    DashboardBlocksComponent,
    ProgramsDashboardComponent,
    BreadcrumbComponent,
    PaginationComponent,
    MatTooltipModule,
  ]

})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ResourceService,BreadcrumbsService]
    };
  }
 }
