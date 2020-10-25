import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/Menu';
import {AboutService} from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = new Menu();
  features: any;
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.loadInfoAbout();
    this.listFeatures();
  }

  loadInfoAbout(): void {
    this.aboutService.loadInfoAbout().subscribe(
      data => {
        this.about = <Menu> data;
        console.log("about: ", data);
      },
      error => {
        console.log(error);
      }
    )
  }

  listFeatures(): void {
    this.aboutService.listFeatures().subscribe(
      data => {
        this.features = data;
        console.log(this.features);
      },
      error => console.log(error)
    )
  }
}
