import { IntroductionService } from './../introduction.service';
import { Intro } from './../../../model/Intro';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal-edit-introduction',
  templateUrl: './modal-edit-introduction.component.html',
  styleUrls: ['./modal-edit-introduction.component.scss']
})
export class ModalEditIntroductionComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalEditIntroductionComponent>,
    private router: Router, private introService: IntroductionService) { }

  intro: Intro;
  @Input() oldIntro: Intro;

  ngOnInit() {
    this.intro = {...this.oldIntro};
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void{
    console.log(this.intro);
    this.introService.editIntro(this.intro).subscribe(
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
