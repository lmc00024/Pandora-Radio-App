import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutLayoutComponent } from './layouts/about-layout/about-layout.component';
import { CareerLayoutComponent } from './layouts/career-layout/career-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { GiftLayoutComponent } from './layouts/gift-layout/gift-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';


const routes: Routes = [
  {path: '', component: HomeLayoutComponent},
  {path: 'home', component: HomeLayoutComponent},
  {path: 'about', component: AboutLayoutComponent},
  {path: "careers", component: CareerLayoutComponent},
  {path: 'gifts', component: GiftLayoutComponent},
  {path: "login", component: LoginLayoutComponent},
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
