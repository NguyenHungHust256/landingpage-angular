import { Menu } from './../../model/Menu';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseUrl = 'http://localhost:8080/landingpage/';
  accessToken: string;
  header: any;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.accessToken = authService.getAccessToken();
    this.header = new HttpHeaders();
    this.header = this.header.set('Content-Type', 'application/json; charset=utf-8');
    this.header = this.header.set('Authorization', 'Bearer ' + this.accessToken);
  }

  listMenus(): Observable<any> {
    return this.http.get(this.baseUrl+"menus", {headers: this.header});
  }

  deleteMenu(id: number){
    return this.http.delete(this.baseUrl + "admin/menus/" + id, {headers: this.header} );
  }

  createMenu(menu: Menu){
    return this.http.post(this.baseUrl + "admin/menus", menu, {headers: this.header} );
  }

  editMenu(menu: Menu){
    return this.http.put(this.baseUrl+"admin/menus/"+ menu.id, menu, {headers: this.header} );
  }
}
