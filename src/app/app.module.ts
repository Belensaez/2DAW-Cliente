import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ads1Component } from './components/ads1/ads1.component';
import { Ads2Component } from './components/ads2/ads2.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { Info2Component } from './components/info2/info2.component';
import { Info3Component } from './components/info3/info3.component';
import { Info4Component } from './components/info4/info4.component';

@NgModule({
  declarations: [
    AppComponent,
    Ads1Component,
    Ads2Component,
    ErrorComponent,
    FooterComponent,
    HomeComponent,
    InfoComponent,
    NavbarComponent,
    Info2Component,
    Info3Component,
    Info4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
