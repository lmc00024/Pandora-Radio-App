import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { CareerLayoutComponent } from './layouts/career-layout/career-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { GiftLayoutComponent } from './layouts/gift-layout/gift-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { ContactLayoutComponent } from './layouts/contact-layout/contact-layout.component';
import { AddItemComponent } from './info-card/add-item/add-item.component';

const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'about', component: AboutLayoutComponent},
  {path: "careers", component: CareerLayoutComponent},
  {path: 'gifts', component: GiftLayoutComponent},
  {path: "login", component: LoginLayoutComponent},
  {path: "contact", component: ContactLayoutComponent},
  {path: "forms", component: AddItemComponent}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
