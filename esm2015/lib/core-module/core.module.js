/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDividerModule, MatCardModule, MatButtonModule, MatMenuModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ProgramSidenavComponent } from './components/program-sidenav/program-sidenav.component';
import { TranslatePipe } from './pipes/translate-pipe/translate.pipe';
import { CamelCasePipe } from './pipes/camelcase-pipe/camelcase.pipe';
import { NoValuePipe } from './pipes/no-value-pipe/no-value.pipe';
import { ApiInterceptor } from './services/interceptor-service/interceptor.service';
import { TranslateService } from './services/translate-service/translate.service';
import { UtilityService } from './services/utility-service/utility.service';
import { ApiService } from './services/api-service/api.service';
export class CoreModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiInterceptor, ApiService]
        };
    }
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TranslatePipe,
                    CamelCasePipe,
                    NoValuePipe,
                    NavbarComponent,
                    SidenavComponent,
                    ResponsiveNavbarComponent,
                    ProgramSidenavComponent
                ],
                imports: [
                    NgxSpinnerModule,
                    CommonModule,
                    RouterModule,
                    HttpClientModule,
                    MatButtonModule,
                    MatMenuModule,
                    MatIconModule,
                    HttpModule,
                    MatCardModule,
                    HttpClientModule,
                    MatDividerModule,
                    MatTooltipModule
                ],
                providers: [
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: ApiInterceptor,
                        multi: true
                    },
                ],
                exports: [
                    TranslatePipe,
                    NavbarComponent,
                    SidenavComponent,
                    ResponsiveNavbarComponent,
                    CamelCasePipe,
                    NoValuePipe,
                    ProgramSidenavComponent,
                    CommonModule,
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQTJDaEUsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxVQUFVLENBQUM7U0FDdkUsQ0FBQztJQUNKLENBQUM7OztZQWhERixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixXQUFXO29CQUNYLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixhQUFhO29CQUNiLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixhQUFhO29CQUNiLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixnQkFBZ0I7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsYUFBYTtvQkFDYixXQUFXO29CQUNYLHVCQUF1QjtvQkFDdkIsWUFBWTtpQkFDYjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBNYXREaXZpZGVyTW9kdWxlLE1hdENhcmRNb2R1bGUsTWF0QnV0dG9uTW9kdWxlLE1hdE1lbnVNb2R1bGUgLE1hdEljb25Nb2R1bGUsTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4U3Bpbm5lck1vZHVsZSB9IGZyb20gJ25neC1zcGlubmVyJztcbmltcG9ydCB7IFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmVzcG9uc2l2ZS1uYXZiYXIvcmVzcG9uc2l2ZS1uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9ncmFtLXNpZGVuYXYvcHJvZ3JhbS1zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi9waXBlcy90cmFuc2xhdGUtcGlwZS90cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBDYW1lbENhc2VQaXBlIH0gZnJvbSAnLi9waXBlcy9jYW1lbGNhc2UtcGlwZS9jYW1lbGNhc2UucGlwZSc7XG5pbXBvcnQgeyBOb1ZhbHVlUGlwZSB9IGZyb20gJy4vcGlwZXMvbm8tdmFsdWUtcGlwZS9uby12YWx1ZS5waXBlJztcbmltcG9ydCB7IEFwaUludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbnRlcmNlcHRvci1zZXJ2aWNlL2ludGVyY2VwdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdHJhbnNsYXRlLXNlcnZpY2UvdHJhbnNsYXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXRpbGl0eVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3V0aWxpdHktc2VydmljZS91dGlsaXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBpLXNlcnZpY2UvYXBpLnNlcnZpY2UnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBDYW1lbENhc2VQaXBlLFxuICAgIE5vVmFsdWVQaXBlLFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBTaWRlbmF2Q29tcG9uZW50LFxuICAgIFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQsXG4gICAgUHJvZ3JhbVNpZGVuYXZDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIE5neFNwaW5uZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRNZW51TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEFwaUludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVHJhbnNsYXRlUGlwZSxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgU2lkZW5hdkNvbXBvbmVudCxcbiAgICBSZXNwb25zaXZlTmF2YmFyQ29tcG9uZW50LFxuICAgIENhbWVsQ2FzZVBpcGUsXG4gICAgTm9WYWx1ZVBpcGUsXG4gICAgUHJvZ3JhbVNpZGVuYXZDb21wb25lbnQsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtUcmFuc2xhdGVTZXJ2aWNlLFV0aWxpdHlTZXJ2aWNlLEFwaUludGVyY2VwdG9yLEFwaVNlcnZpY2VdXG4gICAgfTtcbiAgfVxufVxuIl19