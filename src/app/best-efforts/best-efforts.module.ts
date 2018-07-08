import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestEffortsComponent } from './best-efforts/best-efforts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BestEffortsComponent
  ],
  exports: [
    BestEffortsComponent
  ]
})
export class BestEffortsModule { }
