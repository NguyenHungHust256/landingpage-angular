import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { Feature } from '../../model/Feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private baseUrl = 'http://localhost:8080/landingpage/';
  accessToken: string;
  header: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = authService.getAccessToken();
    this.header = new HttpHeaders();
    this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
    this.header = this.header.set('Authorization', 'Bearer ' + this.accessToken);
  }

  listFeatures(): Observable<any> {
    return this.http.get(this.baseUrl+"features", {headers: this.header});
  }

  deleteFeature(id: number){
    return this.http.delete(this.baseUrl + "admin/features/" + id, {headers: this.header} );
  }

  createFeature(feature: Feature){
    return this.http.post(this.baseUrl + "admin/features", feature, {headers: this.header} );
  }

  editMenu(feature: Feature){
    return this.http.put(this.baseUrl+"admin/menus/"+ feature.id, feature, {headers: this.header} );
  }
}
