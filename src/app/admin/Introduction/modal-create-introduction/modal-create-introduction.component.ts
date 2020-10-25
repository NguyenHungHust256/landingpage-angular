import { IntroductionService } from './../introduction.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Intro } from './../../../model/Intro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-create-introduction',
  templateUrl: './modal-create-introduction.component.html',
  styleUrls: ['./modal-create-introduction.component.scss']
})
export class ModalCreateIntroductionComponent implements OnInit {

  intro = new Intro();
  constructor(private dialogRef: MatDialogRef<ModalCreateIntroductionComponent>,
    private router: Router, private introService: IntroductionService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    console.log(this.intro);
    this.introService.createIntro(this.intro).subscribe(
      data => {
        console.log(data);
        this.closeModal();
        location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }

}
