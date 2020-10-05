import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private urlLogo = 'http://localhost:8080/landingpage/newest-logo';
  text: string;
  constructor(private http: HttpClient) { }

  loadLogo(): Observable<Object>{
    return this.http.get(`${this.urlLogo}`);
    
  }
}
