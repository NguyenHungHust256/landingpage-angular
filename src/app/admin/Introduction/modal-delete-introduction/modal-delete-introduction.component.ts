import { IntroductionService } from './../introduction.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-modal-delete-introduction',
  templateUrl: './modal-delete-introduction.component.html',
  styleUrls: ['./modal-delete-introduction.component.scss']
})
export class ModalDeleteIntroductionComponent implements OnInit {

  @Input() introId: number;

  constructor(private dialogRef: MatDialogRef<ModalDeleteIntroductionComponent>, private router: Router, private introService: IntroductionService) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  deleteLogo(): void {
    this.introService.deleteIntro(this.introId).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    ),
      error => console.log(error);
  }

}
