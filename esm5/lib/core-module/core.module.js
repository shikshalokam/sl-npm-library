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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zaGlrc2hhbG9rYW0vIiwic291cmNlcyI6WyJsaWIvY29yZS1tb2R1bGUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUMsYUFBYSxFQUFDLGVBQWUsRUFBQyxhQUFhLEVBQUUsYUFBYSxFQUFDLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakksT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDcEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNoRTtJQUFBO0lBaURBLENBQUM7Ozs7SUFOUSxrQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxVQUFVLENBQUM7U0FDdkUsQ0FBQztJQUNKLENBQUM7O2dCQWhERixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQix5QkFBeUI7d0JBQ3pCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjt3QkFDaEIsWUFBWTt3QkFDWixZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsVUFBVTt3QkFDVixhQUFhO3dCQUNiLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixnQkFBZ0I7cUJBQ2pCO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUsY0FBYzs0QkFDeEIsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsYUFBYTt3QkFDYixXQUFXO3dCQUNYLHVCQUF1Qjt3QkFDdkIsWUFBWTtxQkFDYjtpQkFDRjs7SUFRRCxpQkFBQztDQUFBLEFBakRELElBaURDO1NBUFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgTWF0RGl2aWRlck1vZHVsZSxNYXRDYXJkTW9kdWxlLE1hdEJ1dHRvbk1vZHVsZSxNYXRNZW51TW9kdWxlICxNYXRJY29uTW9kdWxlLE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lkZW5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFNwaW5uZXJNb2R1bGUgfSBmcm9tICduZ3gtc3Bpbm5lcic7XG5pbXBvcnQgeyBSZXNwb25zaXZlTmF2YmFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Jlc3BvbnNpdmUtbmF2YmFyL3Jlc3BvbnNpdmUtbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUHJvZ3JhbVNpZGVuYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvZ3JhbS1zaWRlbmF2L3Byb2dyYW0tc2lkZW5hdi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vcGlwZXMvdHJhbnNsYXRlLXBpcGUvdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgQ2FtZWxDYXNlUGlwZSB9IGZyb20gJy4vcGlwZXMvY2FtZWxjYXNlLXBpcGUvY2FtZWxjYXNlLnBpcGUnO1xuaW1wb3J0IHsgTm9WYWx1ZVBpcGUgfSBmcm9tICcuL3BpcGVzL25vLXZhbHVlLXBpcGUvbm8tdmFsdWUucGlwZSc7XG5pbXBvcnQgeyBBcGlJbnRlcmNlcHRvciB9IGZyb20gJy4vc2VydmljZXMvaW50ZXJjZXB0b3Itc2VydmljZS9pbnRlcmNlcHRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3RyYW5zbGF0ZS1zZXJ2aWNlL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFV0aWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy91dGlsaXR5LXNlcnZpY2UvdXRpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2FwaS1zZXJ2aWNlL2FwaS5zZXJ2aWNlJztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgQ2FtZWxDYXNlUGlwZSxcbiAgICBOb1ZhbHVlUGlwZSxcbiAgICBOYXZiYXJDb21wb25lbnQsXG4gICAgU2lkZW5hdkNvbXBvbmVudCxcbiAgICBSZXNwb25zaXZlTmF2YmFyQ29tcG9uZW50LFxuICAgIFByb2dyYW1TaWRlbmF2Q29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBOZ3hTcGlubmVyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE1hdERpdmlkZXJNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBBcGlJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRyYW5zbGF0ZVBpcGUsXG4gICAgTmF2YmFyQ29tcG9uZW50LFxuICAgIFNpZGVuYXZDb21wb25lbnQsXG4gICAgUmVzcG9uc2l2ZU5hdmJhckNvbXBvbmVudCxcbiAgICBDYW1lbENhc2VQaXBlLFxuICAgIE5vVmFsdWVQaXBlLFxuICAgIFByb2dyYW1TaWRlbmF2Q29tcG9uZW50LFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVHJhbnNsYXRlU2VydmljZSxVdGlsaXR5U2VydmljZSxBcGlJbnRlcmNlcHRvcixBcGlTZXJ2aWNlXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==