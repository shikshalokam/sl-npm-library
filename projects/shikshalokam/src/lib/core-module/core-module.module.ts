import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHttpService } from './services/common-http.service';
import { KendraServiceService } from './services/kendra-service/kendra-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CoreModuleModule {
  static forRoot(): ModuleWithProviders<CoreModuleModule> {
    return <ModuleWithProviders>{
      ngModule: CoreModuleModule,
      providers: [CommonHttpService, KendraServiceService]
    };
  }
}

