import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHttpService } from './services/common-http.service';
import { KendraServiceService } from './services/kendra-service/kendra-service.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { SideNavListingComponent } from './components/sidenav-listing/sidenav-listing.component';
import { CommunityService } from './services/community-service/community.service';



@NgModule({
  declarations: [FooterComponent, HeadersComponent, PageLayoutComponent, SideNavListingComponent],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [FooterComponent, HeadersComponent, PageLayoutComponent]
})

export class CoreModuleModule {
  static forRoot(): ModuleWithProviders<CoreModuleModule> {
    return <ModuleWithProviders>{
      ngModule: CoreModuleModule,
      providers: [CommonHttpService, KendraServiceService, CommunityService]
    };
  }
}

