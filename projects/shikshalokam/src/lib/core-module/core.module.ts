import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   HttpClientModule } from '@angular/common/http';
import { MatDividerModule,MatCardModule,MatButtonModule,MatMenuModule ,MatIconModule,MatTooltipModule } from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ResponsiveNavbarComponent } from './components/responsive-navbar/responsive-navbar.component';
import { RouterModule } from '@angular/router';
import { ProgramSidenavComponent } from './components/program-sidenav/program-sidenav.component';
import { TranslatePipe } from './pipes/translate-pipe/translate.pipe';
import { CamelCasePipe } from './pipes/camelcase-pipe/camelcase.pipe';
import { NoValuePipe } from './pipes/no-value-pipe/no-value.pipe';
import { TranslateService } from './services/translate-service/translate.service';
import { UtilityService } from './services/utility-service/utility.service';
import { ApiService } from './services/api-service/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './services/interceptor-service/interceptor.service';
@NgModule({
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
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
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
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [TranslateService,UtilityService,ApiService]
    };
  }
}
