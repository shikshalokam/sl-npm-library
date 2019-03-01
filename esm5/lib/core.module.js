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
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    /**
     * @return {?}
     */
    CoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CoreModule,
            providers: [TranslateService, UtilityService, ApiInterceptor, ApiService]
        };
    };
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
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW1jb3JlbW9kdWxlLyIsInNvdXJjZXMiOlsibGliL2NvcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFFLGFBQWEsRUFBQyxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdkcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDakcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDaEU7SUFBQTtJQWlEQSxDQUFDOzs7O0lBTlEsa0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsVUFBVSxDQUFDO1NBQ3ZFLENBQUM7SUFDSixDQUFDOztnQkFoREYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIseUJBQXlCO3dCQUN6Qix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixhQUFhO3dCQUNiLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3FCQUNqQjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLGNBQWM7NEJBQ3hCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLGFBQWE7d0JBQ2IsV0FBVzt3QkFDWCx1QkFBdUI7d0JBQ3ZCLFlBQVk7cUJBQ2I7aUJBQ0Y7O0lBUUQsaUJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQVBZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IE1hdERpdmlkZXJNb2R1bGUsTWF0Q2FyZE1vZHVsZSxNYXRCdXR0b25Nb2R1bGUsTWF0TWVudU1vZHVsZSAsTWF0SWNvbk1vZHVsZSxNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZGVuYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hTcGlubmVyTW9kdWxlIH0gZnJvbSAnbmd4LXNwaW5uZXInO1xuaW1wb3J0IHsgUmVzcG9uc2l2ZU5hdmJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yZXNwb25zaXZlLW5hdmJhci9yZXNwb25zaXZlLW5hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFByb2dyYW1TaWRlbmF2Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyYW0tc2lkZW5hdi9wcm9ncmFtLXNpZGVuYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3BpcGVzL3RyYW5zbGF0ZS1waXBlL3RyYW5zbGF0ZS5waXBlJztcbmltcG9ydCB7IENhbWVsQ2FzZVBpcGUgfSBmcm9tICcuL3BpcGVzL2NhbWVsY2FzZS1waXBlL2NhbWVsY2FzZS5waXBlJztcbmltcG9ydCB7IE5vVmFsdWVQaXBlIH0gZnJvbSAnLi9waXBlcy9uby12YWx1ZS1waXBlL25vLXZhbHVlLnBpcGUnO1xuaW1wb3J0IHsgQXBpSW50ZXJjZXB0b3IgfSBmcm9tICcuL3NlcnZpY2VzL2ludGVyY2VwdG9yLXNlcnZpY2UvaW50ZXJjZXB0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy90cmFuc2xhdGUtc2VydmljZS90cmFuc2xhdGUuc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXR5U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXRpbGl0eS1zZXJ2aWNlL3V0aWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hcGktc2VydmljZS9hcGkuc2VydmljZSc7XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIENhbWVsQ2FzZVBpcGUsXG4gICAgTm9WYWx1ZVBpcGUsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIFNpZGVuYXZDb21wb25lbnQsXG4gICAgUmVzcG9uc2l2ZU5hdmJhckNvbXBvbmVudCxcbiAgICBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgTmd4U3Bpbm5lck1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXREaXZpZGVyTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogQXBpSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmFuc2xhdGVQaXBlLFxuICAgIE5hdmJhckNvbXBvbmVudCxcbiAgICBTaWRlbmF2Q29tcG9uZW50LFxuICAgIFJlc3BvbnNpdmVOYXZiYXJDb21wb25lbnQsXG4gICAgQ2FtZWxDYXNlUGlwZSxcbiAgICBOb1ZhbHVlUGlwZSxcbiAgICBQcm9ncmFtU2lkZW5hdkNvbXBvbmVudCxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1RyYW5zbGF0ZVNlcnZpY2UsVXRpbGl0eVNlcnZpY2UsQXBpSW50ZXJjZXB0b3IsQXBpU2VydmljZV1cbiAgICB9O1xuICB9XG59XG4iXX0=