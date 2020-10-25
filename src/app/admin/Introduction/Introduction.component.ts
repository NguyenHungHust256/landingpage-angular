import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IntroductionService } from './introduction.service';
import { Component, OnInit } from '@angular/core';
import { Intro } from '../../model/Intro';
import { ModalDeleteIntroductionComponent} from './modal-delete-introduction/modal-delete-introduction.component';
import { ModalCreateIntroductionComponent} from './modal-create-introduction/modal-create-introduction.component';
import { ModalEditIntroductionComponent } from './modal-edit-introduction/modal-edit-introduction.component';
@Component({
  selector: 'app-introduction',
  templateUrl: './Introduction.component.html',
  styleUrls: ['./Introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  intros: Observable<Intro[]>;
  constructor(private introService: IntroductionService, private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.introService.listIntros().subscribe(
      data => {
        this.intros = data;
        console.log(this.intros);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteIntro(id: number): void {
    this.openDeleteModal(id);
  }

  editLogo(intro: Intro): void {
    this.openEditModal(intro);
  }


  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "300px";
    dialogConfig.width = "400px";
    const modalDialog = this.matDialog.open(ModalCreateIntroductionComponent, dialogConfig);
  }

  openDeleteModal(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalDeleteIntroductionComponent, dialogConfig);
    modalDialog.componentInstance.introId = id;
  }

  openEditModal(intro: Intro) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalEditIntroductionComponent, dialogConfig);
    modalDialog.componentInstance.oldIntro = intro;
  }
}
