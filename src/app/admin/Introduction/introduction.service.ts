import { Intro } from './../../model/Intro';
import { Injectable } from '@angular/core';
import { AuthService } from './../../auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntroductionService {
  private baseUrl = 'http://localhost:8080/landingpage/';
  accessToken: string;
  header: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = authService.getAccessToken();
    this.header = new HttpHeaders();
    this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
    this.header = this.header.set('Authorization', 'Bearer ' + this.accessToken);
  }

  listIntros(): Observable<any> {
    return this.http.get(this.baseUrl+"intros", {headers: this.header});
  }

  deleteIntro(id: number){
    return this.http.delete(this.baseUrl + "admin/intros/" + id, {headers: this.header} );
  }

  createIntro(intro: Intro){
    return this.http.post(this.baseUrl + "admin/intros", intro, {headers: this.header} );
  }

  editIntro(intro: Intro){
    return this.http.put(this.baseUrl+"admin/intros/"+ intro.id, intro, {headers: this.header} );
  }
}
