import { AuthService } from 'src/app/auth.service';
import { Intro } from './../../model/Intro';
import { Component, OnInit } from '@angular/core';
import { HomeService} from './home.service';
import { ValueSetting} from '../../ValueSetting';
import { Router } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textLogo: string;
  menus: any;
  intro = new Intro();
  action: string;

  constructor(private homeService: HomeService,
              private router: Router,
              private authService: AuthService) {
    this.getAction();
  }

  ngOnInit(): void {
    this.loadMenus();
    this.loadIntro();
    this.loadLogo();
  }

  getAction(){
    if(this.authService.isAuthenticated()){
      this.action = "Log Out";
      return;
    }
    this.action = "Sign In";
  }

  signInOrOut(){
    if(this.authService.isAuthenticated()){
      this.authService.logout();
      this.action = "Sign In";
      window.location.href = "/";
    } else {
      window.location.href = "/Login";
    }
    // this.keycloakService.login();
    // this.init();
  }

  loadLogo(){
    this.homeService.loadLogo().subscribe(
      data => {
        this.textLogo = data == null ? ValueSetting.LOGO : data['text'];
        console.log("logo: ", this.textLogo);
      },
      error => this.textLogo = ValueSetting.LOGO
    );
  }
  loadMenus(){
    this.homeService.loadMenu().subscribe(
      data => {
        // this.menus.id = data['id'];
        // this.menus.name = data['name'];
        // this.menus.description = data['description'];
        // this.menus.name = data['name'];
        this.menus = data;
        console.log("Menu: ",this.menus);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadIntro(){
    this.homeService.loadIntro().subscribe(
      data => {
        if(data != null){
          this.intro.id = data['id'];
          this.intro.title = data['title'];
          this.intro.description = data['description'];
          console.log("intro: ", this.intro);
        }
      },
      error => {
        console.log(error);
      }
    );
  }



}
