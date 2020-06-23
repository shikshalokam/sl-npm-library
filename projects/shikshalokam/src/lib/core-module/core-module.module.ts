import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHttpService } from './services/common-http.service';
import { KendraServiceService } from './services/kendra-service/kendra-service.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeadersComponent } from './components/headers/headers.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SideListingComponent } from './components/side-listing/side-listing.component';



@NgModule({
  declarations: [FooterComponent, HeadersComponent, SideNavComponent, SideListingComponent],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [FooterComponent, HeadersComponent, SideNavComponent]
})

export class CoreModuleModule {
  static forRoot(): ModuleWithProviders<CoreModuleModule> {
    return <ModuleWithProviders>{
      ngModule: CoreModuleModule,
      providers: [CommonHttpService, KendraServiceService]
    };
  }
}

