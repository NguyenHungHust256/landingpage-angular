import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlLogo = 'http://localhost:8080/landingpage/newest-logo';
  private urlMenu = 'http://localhost:8080/landingpage/menus';
  private urlIntro = 'http://localhost:8080/landingpage/newest-intro';
  text: string;

  constructor(private http: HttpClient) { }

  loadLogo(): Observable<Object>{
    return this.http.get(`${this.urlLogo}`);
  }

  loadMenu(): Observable<Object> {
    return this.http.get(this.urlMenu);
  }

  loadIntro(): Observable<Object> {
    return this.http.get(this.urlIntro);
  }
}
