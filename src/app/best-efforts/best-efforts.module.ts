import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestEffortsComponent } from './best-efforts.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BestEffortsMockDb } from './best-efforts.mock-db';
import { BestEffortsService } from './best-efforts.service';
import { BestEffortsResolver } from './best-efforts.resolver';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(BestEffortsMockDb, { passThruUnknownUrl: true })
  ],
  declarations: [
    BestEffortsComponent
  ],
  exports: [
    BestEffortsComponent
  ]
})
export class BestEffortsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BestEffortsModule,
      providers: [
        BestEffortsService,
        BestEffortsResolver
      ]
    };
  }
}
