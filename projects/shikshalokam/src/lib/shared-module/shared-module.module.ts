import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputComponent } from './components/input/input.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { PasswordComponent } from './components/password/password.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { InputChipComponent } from './components/input-chip/input-chip.component';

 

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AutoCompleteComponent, CheckboxComponent, DateComponent,
     DynamicFieldDirective, DynamicFormComponent, InputComponent, TextAreaComponent,
     SelectComponent,
     RadiobuttonComponent,
     PasswordComponent,
     MultiSelectComponent,
     InputChipComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    // BrowserModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSidenavModule,
    RouterModule,
  //   TranslateModule.forRoot({
  //     loader: {
  //         provide: TranslateLoader,
  //         useFactory: HttpLoaderFactory,
  //         deps: [HttpClient]
  //     }
  // })
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    // BrowserModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatSidenavModule,
    RouterModule,
    TranslateModule,
    AutoCompleteComponent,
    CheckboxComponent,
    DateComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    InputComponent,
    TextAreaComponent,
    SelectComponent,
    RadiobuttonComponent,
    PasswordComponent,
    MultiSelectComponent
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModuleModule { 
  constructor( public translate: TranslateService){
    translate.addLangs(['en', 'od']);
    translate.setDefaultLang('en');
  }
}
