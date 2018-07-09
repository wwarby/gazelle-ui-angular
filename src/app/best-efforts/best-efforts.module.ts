import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestEffortsComponent } from './best-efforts.component';
import { environment } from '../../environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BestEffortsMockData } from './best-efforts.mock-data';
import { BestEffortsService } from './best-efforts.service';
import { BestEffortsResolver } from './best-efforts.resolver';

@NgModule({
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(BestEffortsMockData, { passThruUnknownUrl: true })
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
