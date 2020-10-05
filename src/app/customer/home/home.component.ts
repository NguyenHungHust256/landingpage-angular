import { Component, OnInit } from '@angular/core';
import { HomeService} from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  textLogo: string;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.loadLogo().subscribe(
      data => {
        this.textLogo = data['text'];
        console.log(this.textLogo);
      },
      error => this.textLogo = "HUNG"
    );
  }

}
