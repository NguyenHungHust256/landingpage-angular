import { Logo } from './../../model/Logo';
import { AuthService } from './../../auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  private baseUrl = 'http://localhost:8080/landingpage/';
  accessToken: string;
  // header: HttpHeaders;
  header: any;

  text: string;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = authService.getAccessToken();
    this.header = new HttpHeaders();
    this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
    this.header = this.header.set('Authorization', 'Bearer ' + this.accessToken);
    console.log("Check logo accesstoken: " ,this.accessToken);
  }

  listLogos(): Observable<any> {
    return this.http.get(this.baseUrl+"admin/logos", {headers: this.header});
  }

  deleteLogo(id: number){
    return this.http.delete(this.baseUrl + "admin/logos/" + id, {headers: this.header} );
  }

  createLogo(logo: Logo){
    return this.http.post(this.baseUrl + "admin/logos", logo, {headers: this.header} );
  }

  editLogo(logo: Logo){
    return this.http.put(this.baseUrl+"admin/logos/"+ logo.id, logo, {headers: this.header} );
  }
}
