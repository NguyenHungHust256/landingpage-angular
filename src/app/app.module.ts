import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './customer/home/home.component';
import { AboutComponent } from './customer/about/about.component';
import { PricingComponent } from './customer/pricing/pricing.component';
import { TestimonialComponent } from './customer/testimonial/testimonial.component';
import { DownloadComponent } from './customer/download/download.component';
import { FooterComponent } from './customer/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { HomeAboutComponent } from './customer/HomeAbout/HomeAbout.component';
import { HomeDownloadComponent } from './customer/HomeDownload/HomeDownload.component';
import { HomePriceComponent } from './customer/HomePrice/HomePrice.component';
import { HomeTestimonialComponent } from './customer/HomeTestimonial/HomeTestimonial.component';
import {MenuAdminComponent} from './admin/menu-admin/menu-admin.component';
import { AdminComponent } from './admin/admin.component';
import {ListLogoComponent} from './admin/logo/list-logo/list-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAboutComponent,
    AboutComponent,
    PricingComponent,
    TestimonialComponent,
    DownloadComponent,
    FooterComponent,
    LoginComponent,
    HomeDownloadComponent,
    HomePriceComponent,
    HomeTestimonialComponent,
    MenuAdminComponent,
    AdminComponent,
    ListLogoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
