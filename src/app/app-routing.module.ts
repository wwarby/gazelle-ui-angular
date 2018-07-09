import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { BestEffortsResolver } from './best-efforts/best-efforts.resolver';
import { BestEffortsModule } from './best-efforts/best-efforts.module';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', resolve: { bestEfforts: BestEffortsResolver } },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
