import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private baseUrl = 'http://localhost:8080/landingpage/';
  access_token: string;
  header: any;

  text: string;
  constructor(private http: HttpClient, private cookie: CookieService) {
    this.access_token = cookie.get('access_token');
    this.header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Baerer ${this.access_token}`)
    }
    console.log("header: ", this.access_token);
  }

  listLogos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+"admin/logos", this.header);
  }
}
