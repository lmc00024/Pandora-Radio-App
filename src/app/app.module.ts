import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar/top-nav-bar.component';
import { FootNavBarComponent } from './footer/foot-nav-bar/foot-nav-bar.component';
import { SubscriptionCardComponent } from './subscription/subscription-card.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { GiftLayoutComponent } from './layouts/gift-layout/gift-layout.component';
import { CareerLayoutComponent } from './layouts/career-layout/career-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FootNavBarComponent,
    SubscriptionCardComponent,
    InfoCardComponent,
    AboutLayoutComponent,
    HomeLayoutComponent,
    GiftLayoutComponent,
    CareerLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
