import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { BestEffortsModule } from '../best-efforts/best-efforts.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    BestEffortsModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    HomeComponent
  ]
})
export class CoreModule { }
