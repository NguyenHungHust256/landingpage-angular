import { AuthService } from './../../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private baseUrl = 'http://localhost:8080/landingpage/';
  private urlAbout = 'http://localhost:8080/landingpage/menus/name/About';

  accessToken: string;
  header: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = authService.getAccessToken();
    this.header = new HttpHeaders();
    this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
    this.header = this.header.set('Authorization', 'Bearer ' + this.accessToken);
  }

  loadInfoAbout(): Observable<Object> {
    return this.http.get(this.urlAbout);
  }
  
  listFeatures(): Observable<any> {
    return this.http.get(this.baseUrl+"features", {headers: this.header});
  }
}