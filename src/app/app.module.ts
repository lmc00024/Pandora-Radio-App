import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './header/top-nav-bar/top-nav-bar.component';
import { FootNavBarComponent } from './footer/foot-nav-bar/foot-nav-bar.component';
import { SubscriptionCardComponent } from './subscription/subscription-card.component';
// import { SecondaryFootNavBarComponent } from './secondary-foot-nav-bar/secondary-foot-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FootNavBarComponent,
    SubscriptionCardComponent
    // SecondaryFootNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
