import { Intro } from './model/Intro';
import { IntroductionComponent } from './admin/Introduction/Introduction.component';
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
import { MenuAdminComponent} from './admin/menu-admin/menu-admin.component';
import { AdminComponent } from './admin/admin.component';
import { ListLogoComponent} from './admin/logo/list-logo/list-logo.component';
import { ModalCreateLogoComponent } from './admin/logo/list-logo/modal-create-logo/modal-create-logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalDeleteLogoComponent} from './admin/logo/list-logo/modal-delete-logo/modal-delete-logo.component';
import { ModalEditLogoComponent } from './admin/logo/list-logo/modal-edit-logo/modal-edit-logo.component';
import { ModalDeleteIntroductionComponent} from './admin/Introduction/modal-delete-introduction/modal-delete-introduction.component';
import { ModalEditIntroductionComponent } from './admin/Introduction/modal-edit-introduction/modal-edit-introduction.component';
import { ModalCreateIntroductionComponent} from './admin/Introduction/modal-create-introduction/modal-create-introduction.component';
import { ModalDeleteMenuComponent} from './admin/menu/modal-delete-menu/modal-delete-menu.component';
import { ModalEditMenuComponent } from './admin/menu/modal-edit-menu/modal-edit-menu.component';
import { ModalCreateMenuComponent} from './admin/menu/modal-create-menu/modal-create-menu.component';
import { MenuComponent} from './admin/menu/menu.component';
import {FeatureComponent} from './admin/feature/feature.component';
import {ModalCreateFeatureComponent} from './admin/feature/modal-create-feature/modal-create-feature.component';
import {ModalDeleteFeatureComponent} from './admin/feature/modal-delete-feature/modal-delete-feature.component';
import {ModalEditFeatureComponent} from './admin/feature/modal-edit-feature/modal-edit-feature.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
// import { APP_INITIALIZER } from '@angular/core';
// import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak.init({
//       config: {
//         clientId: 'landingpage',
//         realm: 'demo',
//         url: 'http://localhost:8180/auth'
//       },
//       initOptions: {
//         onLoad: 'login-required',
//         checkLoginIframe: false
//         // silentCheckSsoRedirectUri:
//         //   window.location.origin + '/assets/silent-check-sso.html',
//       },
//       enableBearerInterceptor: true,
//     });
// }

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
    ListLogoComponent,
    ModalCreateLogoComponent,
    ModalDeleteLogoComponent,
    ModalEditLogoComponent,
    IntroductionComponent,
    ModalEditIntroductionComponent,
    ModalDeleteIntroductionComponent,
    ModalCreateIntroductionComponent,
    ModalEditMenuComponent,
    ModalDeleteMenuComponent,
    ModalCreateMenuComponent,
    MenuComponent,
    FeatureComponent,
    ModalCreateFeatureComponent,
    ModalDeleteFeatureComponent,
    ModalEditFeatureComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
    // KeycloakAngularModule
  ],
  providers: [CookieService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService],
    // { provide: APP_INITIALIZER, useFactory: initializeKeycloak, multi: true, deps: [KeycloakService] }],
  bootstrap: [AppComponent]
})
export class AppModule { }
