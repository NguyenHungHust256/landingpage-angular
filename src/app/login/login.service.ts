import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl = 'http://localhost:8080/landingpage/login';

  constructor(private http: HttpClient) {}

  getToken(infoLogin: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, infoLogin);
  }
}
