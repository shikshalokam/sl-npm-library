/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DropdownFieldComponent } from './components/dropdown-field/dropdown-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatRadioModule, MatDividerModule, MatCheckboxModule } from '@angular/material';
import { NumberFieldComponent } from './components/number-field/number-field.component';
import { TextareaFieldComponent } from './components/textarea-field/textarea-field.component';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { ParentHeadingComponent } from './components/parent-heading/parent-heading.component';
import { CoreModule } from '../core-module/core.module';
;
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderComponent } from './components/loader/loader.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { FormArrayFieldComponent } from './components/form-array-field/form-array-field.component';
import { SearchDirective } from './directives/search-directive/search.directive';
import { DashboardBlocksComponent } from './components/dashboard-blocks/dashboard-blocks.component';
import { ResourceService } from './services/resource-service/resource.service';
export class SharedModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [ResourceService]
        };
    }
}
SharedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DynamicFormComponent, DialogBoxComponent, TextFieldComponent, DropdownFieldComponent, NumberFieldComponent, TextareaFieldComponent, BreadcrumbComponent, ParentHeadingComponent, ImageCardComponent, LoaderComponent, SelectFieldComponent, FormArrayFieldComponent, SearchDirective, DashboardBlocksComponent],
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
                    NgxSpinnerModule
                ],
                entryComponents: [DialogBoxComponent],
                exports: [DynamicFormComponent, NgxSpinnerModule, BreadcrumbComponent, ParentHeadingComponent, MatSnackBarModule, ImageCardComponent, LoaderComponent, SearchDirective, DashboardBlocksComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUFBLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUF3Qi9FLE1BQU0sT0FBTyxZQUFZOzs7O0lBQ3ZCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQzs7O1lBN0JGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBQyxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixDQUFFO2dCQUM3VCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLHdCQUF3QjtvQkFDeEIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxlQUFlO29CQUNmLFlBQVk7b0JBQ1osVUFBVTtvQkFDVixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtpQkFDakI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRyxDQUFDLG9CQUFvQixFQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsd0JBQXdCLENBQUM7YUFFNUwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90ZXh0LWZpZWxkL3RleHQtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3Bkb3duRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHJvcGRvd24tZmllbGQvZHJvcGRvd24tZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUsIE1hdFJhZGlvTW9kdWxlLCBNYXREaXZpZGVyTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE51bWJlckZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL251bWJlci1maWVsZC9udW1iZXItZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEtZmllbGQvdGV4dGFyZWEtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQYXJlbnRIZWFkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhcmVudC1oZWFkaW5nL3BhcmVudC1oZWFkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi4vY29yZS1tb2R1bGUvY29yZS5tb2R1bGUnOztcbmltcG9ydCB7IERpYWxvZ0JveENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50J1xuaW1wb3J0IHtNYXREaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBJbWFnZUNhcmRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaW1hZ2UtY2FyZC9pbWFnZS1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyTW9kdWxlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xuaW1wb3J0IHsgTG9hZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC1maWVsZC9zZWxlY3QtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1BcnJheUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tYXJyYXktZmllbGQvZm9ybS1hcnJheS1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VhcmNoRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlYXJjaC1kaXJlY3RpdmUvc2VhcmNoLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXNoYm9hcmRCbG9ja3NDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkLWJsb2Nrcy9kYXNoYm9hcmQtYmxvY2tzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Jlc291cmNlLXNlcnZpY2UvcmVzb3VyY2Uuc2VydmljZSc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEeW5hbWljRm9ybUNvbXBvbmVudCxEaWFsb2dCb3hDb21wb25lbnQsIFRleHRGaWVsZENvbXBvbmVudCwgRHJvcGRvd25GaWVsZENvbXBvbmVudCwgTnVtYmVyRmllbGRDb21wb25lbnQsIFRleHRhcmVhRmllbGRDb21wb25lbnQsIEJyZWFkY3J1bWJDb21wb25lbnQsUGFyZW50SGVhZGluZ0NvbXBvbmVudCwgSW1hZ2VDYXJkQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQsIFNlbGVjdEZpZWxkQ29tcG9uZW50LCBGb3JtQXJyYXlGaWVsZENvbXBvbmVudCwgU2VhcmNoRGlyZWN0aXZlLCBEYXNoYm9hcmRCbG9ja3NDb21wb25lbnQgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXREaWFsb2dNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBDb3JlTW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgIE5neFNwaW5uZXJNb2R1bGVcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbRGlhbG9nQm94Q29tcG9uZW50XSxcbiAgZXhwb3J0cyA6IFtEeW5hbWljRm9ybUNvbXBvbmVudCxOZ3hTcGlubmVyTW9kdWxlLEJyZWFkY3J1bWJDb21wb25lbnQsUGFyZW50SGVhZGluZ0NvbXBvbmVudCwgTWF0U25hY2tCYXJNb2R1bGUsSW1hZ2VDYXJkQ29tcG9uZW50LExvYWRlckNvbXBvbmVudCxTZWFyY2hEaXJlY3RpdmUsRGFzaGJvYXJkQmxvY2tzQ29tcG9uZW50XVxuXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbUmVzb3VyY2VTZXJ2aWNlXVxuICAgIH07XG4gIH1cbiB9XG4iXX0=