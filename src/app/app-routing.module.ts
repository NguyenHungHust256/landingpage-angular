import { IntroductionComponent } from './admin/Introduction/Introduction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './customer/about/about.component';
import { HomeAboutComponent } from './customer/HomeAbout/HomeAbout.component';
import { DownloadComponent } from './customer/download/download.component';
import { HomeComponent } from './customer/home/home.component';
import { PricingComponent } from './customer/pricing/pricing.component';
import { TestimonialComponent } from './customer/testimonial/testimonial.component';
import { LoginComponent } from './login/login.component';
import { HomeDownloadComponent } from './customer/HomeDownload/HomeDownload.component';
import { HomePriceComponent } from './customer/HomePrice/HomePrice.component';
import { HomeTestimonialComponent } from './customer/HomeTestimonial/HomeTestimonial.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { AdminComponent } from './admin/admin.component';
import { ListLogoComponent } from './admin/logo/list-logo/list-logo.component';
import { MenuComponent } from './admin/menu/menu.component';
import { FeatureComponent } from './admin/feature/feature.component';

const routes: Routes = [
  { path: '', component: HomeAboutComponent },
  { path: 'About', component: HomeAboutComponent },
  { path: 'Pricing', component: HomePriceComponent },
  { path: 'Testimonial', component: HomeTestimonialComponent },
  { path: 'Download', component: HomeDownloadComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'Admin/logos', component: ListLogoComponent },
  { path: 'Admin/intros', component: IntroductionComponent},
  { path: 'Admin/menus', component: MenuComponent},
  {path: 'Admin/features', component: FeatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
