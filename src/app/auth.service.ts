import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  currentUserSubject: BehaviorSubject<User>;
  // public currentUser: Observable<User>;
  private baseUrl = 'http://localhost:8080/landingpage/login';

  constructor(private cookieService: CookieService, private http: HttpClient, private jwtHelper: JwtHelperService) {
    if (localStorage.getItem('currentUser') !== null && !this.jwtHelper.isTokenExpired(localStorage.getItem('currentUser')['access_token'])){
      localStorage.removeItem('currentUser');
      this.currentUserSubject = new BehaviorSubject<User>(new User());
    } else {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse( localStorage.getItem('currentUser')));

    }
      // this.currentUser = this.currentUserSubject.asObservable();

  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isLogin(): boolean {
    return  (this.currentUserSubject.value !== null) && this.currentUserSubject.value.access_token != null;
  }

  isAdmin(): boolean {
    return this.isLogin() && this.jwtHelper.decodeToken(this.getAccessToken())['realm_access']['roles'].includes('app-admin');
  }

  login(infoLogin: Object) {
    return this.http.post(this.baseUrl, infoLogin);
  }
  public getAccessToken(): string {
    let user: User = JSON.parse(localStorage.getItem('currentUser'));
    return this.isLogin() ? user.access_token : null;
  }

  public isAuthenticated(): boolean {
    const token = this.getAccessToken();
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
