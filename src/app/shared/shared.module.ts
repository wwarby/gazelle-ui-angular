import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShortTimePipe } from './short-time.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShortTimePipe
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShortTimePipe
  ]
})
export class SharedModule { }
