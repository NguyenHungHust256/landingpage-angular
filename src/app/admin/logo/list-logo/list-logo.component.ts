import { Component, OnInit } from '@angular/core';
import { Logo } from '../../../model/Logo';
import { Observable } from 'rxjs'
import { LogoService } from '../logo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-logo',
  templateUrl: './list-logo.component.html',
  styleUrls: ['./list-logo.component.scss']
})
export class ListLogoComponent implements OnInit {

  logos: Observable<Logo[]>;
  constructor(private logoService: LogoService, private router: Router ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.logoService.listLogos().subscribe(
      data => {
        this.logos = data;
        console.log(this.logos);
      },
      error => {
        console.error(error);
      }
    )
  }

}
