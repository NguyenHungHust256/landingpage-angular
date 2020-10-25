import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {InfoLogin} from './InfoLogin';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { User } from '../model/User';
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
  private dataLogin: any;


  constructor(
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService,
    private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    this.infoLogin = new InfoLogin();
    this.submitted = false;
  }

  onSubmit(){
    this.authService.login(this.infoLogin).subscribe(data => {
      console.log(data);
      this.dataLogin = data;
      const decodedToken = this.jwtHelper.decodeToken(this.dataLogin['access_token']);
      let user = new User();
      user.username = decodedToken['preferred_username'];
      user.id = decodedToken['sub'];
      user.firstName = decodedToken['given_name'];
      user.lastName = decodedToken['family_name'];
      user.email = decodedToken['email'];
      user.access_token = this.dataLogin['access_token'];
      user.refresh_token = this.dataLogin['refresh_token'];
      localStorage.setItem('currentUser', JSON.stringify(user));
      console.log("login: ", this.authService.currentUserSubject);
      this.authService.currentUserSubject.next(user);
      if (this.authService.isAdmin()){
        this.goToAdminPage();
      } else {
        this.goToHomePage();
      }
    },
      error => {
        console.log("Khong the login", error);
        this.submitted = true;
      }
    );
  }

  goToAdminPage(){
    this.router.navigate(['/Admin']);
  }

  goToHomePage(){
    window.location.href="/";
  }
}
