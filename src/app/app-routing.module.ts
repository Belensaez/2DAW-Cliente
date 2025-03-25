import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Ads1Component } from './components/ads1/ads1.component';
import { Ads2Component } from './components/ads2/ads2.component';
import { ErrorComponent } from './components/error/error.component';
import { InfoComponent } from './components/info/info.component';
import { Info2Component } from './components/info2/info2.component';
import { Info3Component } from './components/info3/info3.component';
import { Info4Component } from './components/info4/info4.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'info2', component: Info2Component },
  { path: 'info3', component: Info3Component },
  { path: 'info4', component: Info4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
