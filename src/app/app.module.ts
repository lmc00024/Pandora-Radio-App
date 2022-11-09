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
import { AboutHeaderComponent } from './about/about-header/about-header.component';
import { AboutFooterComponent } from './about/about-footer/about-footer.component';
import { AboutSidebarComponent } from './about/about-sidebar/about-sidebar.component';
import { AboutBodyComponent } from './about/about-body/about-body.component';
import { GiftHeaderComponent } from './gift/gift-header/gift-header.component';
import { GiftFooterComponent } from './gift/gift-footer/gift-footer.component';
import { GiftBodyComponent } from './gift/gift-body/gift-body.component';
import { CareersHeaderComponent } from './careers/careers-header/careers-header.component';
import { CareersFooterComponent } from './careers/careers-footer/careers-footer.component';
import { CareersBodyComponent } from './careers/careers-body/careers-body.component';
import { CareersTopFooterComponent } from './careers/careers-top-footer/careers-top-footer.component';
import { LoginHeaderComponent } from './login/login-header/login-header.component';
import { LoginFooterComponent } from './login/login-footer/login-footer.component';
import { LoginInputComponent } from './login/login-input/login-input.component';
import { LoginBottomHeaderComponent } from './login/login-bottom-header/login-bottom-header.component';
import { ContactLayoutComponent } from './layouts/contact-layout/contact-layout.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { ContactBodyComponent } from './contact/contact-body/contact-body.component';
import { ContactFooterComponent } from './contact/contact-footer/contact-footer.component';
import { ContactSidebarComponent } from './contact/contact-sidebar/contact-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './login/user-info/user-info.component';

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
    LoginLayoutComponent,
    AboutHeaderComponent,
    AboutFooterComponent,
    AboutSidebarComponent,
    AboutBodyComponent,
    GiftHeaderComponent,
    GiftFooterComponent,
    GiftBodyComponent,
    CareersHeaderComponent,
    CareersFooterComponent,
    CareersBodyComponent,
    CareersTopFooterComponent,
    LoginHeaderComponent,
    LoginFooterComponent,
    LoginInputComponent,
    LoginBottomHeaderComponent,
    ContactLayoutComponent,
    ContactHeaderComponent,
    ContactBodyComponent,
    ContactFooterComponent,
    ContactSidebarComponent,
    UserInfoComponent,

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
