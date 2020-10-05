import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {InfoLogin} from './InfoLogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public infoLogin: InfoLogin;
  submitted: boolean;
  data: any;
  isAdmin: boolean;


  constructor(private loginService: LoginService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.infoLogin = new InfoLogin();
    this.submitted = false;
  }

  getToken(){
    this.loginService.getToken(this.infoLogin).subscribe(
      data => {
        this.submitted = false;
        this.data = data;
        // let myObj = JSON.parse(this.data);
        const helper = new JwtHelperService();

        const decodedToken = helper.decodeToken(this.data['access_token']);
        this.isAdmin = decodedToken['realm_access']['roles'].includes("app-admin");
        this.cookieService.set("access_token", this.data['access_token']);
        this.cookieService.set("isAdmin", "true");
        if(this.isAdmin){
          this.goToAdminPage();
          console.log("Vao Admin roi do");
        } else {
          this.goToHomePage();
        }
      },
      error => {
        this.submitted = true;
        console.log(error);
      }
    );
  }
  onSubmit(){
    this.getToken();
  }

  goToAdminPage(){
    this.router.navigate(['/Admin']);
  }

  goToHomePage(){
    this.router.navigate(['/']);
  }
}
