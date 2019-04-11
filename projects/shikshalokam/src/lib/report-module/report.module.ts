import { NgModule, ModuleWithProviders } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import { MatIconModule } from '@angular/material/icon';
import { EntityReportComponent } from './entity-report/entity-report.component';
import { HighlevelEntityReportComponent } from './highlevel-entity-report/highlevel-entity-report.component';
import { MultipleEntityDrilldownReportComponent } from './multiple-entity-drilldown-report/multiple-entity-drilldown-report.component';
import { MultipleEntityRportComponent } from './multiple-entity-report/multiple-entity-report.component';
import { MatCardModule, MatExpansionModule, MatDivider, MatDividerModule, MatListModule, MatChipsModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { OpsReportComponent } from './ops-report/ops-report.component';
import { SharedModule } from '../shared-module/shared.module';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core-module/core.module';
@NgModule({
  declarations: [
   EntityReportComponent,
   HighlevelEntityReportComponent,
   MultipleEntityDrilldownReportComponent,
   MultipleEntityRportComponent,
   OpsReportComponent
  ],
  imports: [
    MatCardModule,
    MatInputModule,
    CoreModule,
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatChipsModule,
    MatButtonModule,
    MatFormFieldModule,
    SharedModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    GoogleChartsModule.forRoot(),
    MatIconModule

  ],
  entryComponents: [],
  exports: [
    EntityReportComponent,
    HighlevelEntityReportComponent,
    MultipleEntityDrilldownReportComponent,
    MultipleEntityRportComponent
  ],
  providers :[
    MatDatepickerModule,

  ]

})
export class ReportModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ReportModule,
      providers: [ ]
    };
  }
}
