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
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    /**
     * @return {?}
     */
    SharedModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SharedModule,
            providers: [ResourceService]
        };
    };
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
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NoaWtzaGFsb2thbS8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQtbW9kdWxlL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN4RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUFBLENBQUM7QUFDekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDakYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0U7SUFBQTtJQThCQyxDQUFDOzs7O0lBTk8sb0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQzs7Z0JBN0JGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBQyxzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsZUFBZSxFQUFFLHdCQUF3QixDQUFFO29CQUM3VCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsbUJBQW1CO3dCQUNuQixjQUFjO3dCQUNkLHdCQUF3Qjt3QkFDeEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFlBQVk7d0JBQ1osVUFBVTt3QkFDVixpQkFBaUI7d0JBQ2pCLGdCQUFnQjtxQkFDakI7b0JBQ0QsZUFBZSxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQ3JDLE9BQU8sRUFBRyxDQUFDLG9CQUFvQixFQUFDLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLHNCQUFzQixFQUFFLGlCQUFpQixFQUFDLGtCQUFrQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsd0JBQXdCLENBQUM7aUJBRTVMOztJQVFBLG1CQUFDO0NBQUEsQUE5QkYsSUE4QkU7U0FQVyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dC1maWVsZC90ZXh0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcm9wZG93bkZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duLWZpZWxkL2Ryb3Bkb3duLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9udW1iZXItZmllbGQvbnVtYmVyLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXh0YXJlYUZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHRhcmVhLWZpZWxkL3RleHRhcmVhLWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IEJyZWFkY3J1bWJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUGFyZW50SGVhZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYXJlbnQtaGVhZGluZy9wYXJlbnQtaGVhZGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4uL2NvcmUtbW9kdWxlL2NvcmUubW9kdWxlJzs7XG5pbXBvcnQgeyBEaWFsb2dCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudCdcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgSW1hZ2VDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ltYWdlLWNhcmQvaW1hZ2UtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4U3Bpbm5lck1vZHVsZSB9IGZyb20gJ25neC1zcGlubmVyJztcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3QtZmllbGQvc2VsZWN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtQXJyYXlGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWFycmF5LWZpZWxkL2Zvcm0tYXJyYXktZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWFyY2gtZGlyZWN0aXZlL3NlYXJjaC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQmxvY2tzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC1ibG9ja3MvZGFzaGJvYXJkLWJsb2Nrcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yZXNvdXJjZS1zZXJ2aWNlL3Jlc291cmNlLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRHluYW1pY0Zvcm1Db21wb25lbnQsRGlhbG9nQm94Q29tcG9uZW50LCBUZXh0RmllbGRDb21wb25lbnQsIERyb3Bkb3duRmllbGRDb21wb25lbnQsIE51bWJlckZpZWxkQ29tcG9uZW50LCBUZXh0YXJlYUZpZWxkQ29tcG9uZW50LCBCcmVhZGNydW1iQ29tcG9uZW50LFBhcmVudEhlYWRpbmdDb21wb25lbnQsIEltYWdlQ2FyZENvbXBvbmVudCwgTG9hZGVyQ29tcG9uZW50LCBTZWxlY3RGaWVsZENvbXBvbmVudCwgRm9ybUFycmF5RmllbGRDb21wb25lbnQsIFNlYXJjaERpcmVjdGl2ZSwgRGFzaGJvYXJkQmxvY2tzQ29tcG9uZW50IF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgQ29yZU1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgICBOZ3hTcGlubmVyTW9kdWxlXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW0RpYWxvZ0JveENvbXBvbmVudF0sXG4gIGV4cG9ydHMgOiBbRHluYW1pY0Zvcm1Db21wb25lbnQsTmd4U3Bpbm5lck1vZHVsZSxCcmVhZGNydW1iQ29tcG9uZW50LFBhcmVudEhlYWRpbmdDb21wb25lbnQsIE1hdFNuYWNrQmFyTW9kdWxlLEltYWdlQ2FyZENvbXBvbmVudCxMb2FkZXJDb21wb25lbnQsU2VhcmNoRGlyZWN0aXZlLERhc2hib2FyZEJsb2Nrc0NvbXBvbmVudF1cblxufSlcbmV4cG9ydCBjbGFzcyBTaGFyZWRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNoYXJlZE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1Jlc291cmNlU2VydmljZV1cbiAgICB9O1xuICB9XG4gfVxuIl19