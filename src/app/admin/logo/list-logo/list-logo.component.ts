import { Component, OnInit } from '@angular/core';
import { Logo } from '../../../model/Logo';
import { Observable } from 'rxjs';
import { LogoService } from '../logo.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalCreateLogoComponent } from './modal-create-logo/modal-create-logo.component';
import { ModalDeleteLogoComponent } from './modal-delete-logo/modal-delete-logo.component';
import { ModalEditLogoComponent } from './modal-edit-logo/modal-edit-logo.component';
@Component({
  selector: 'app-list-logo',
  templateUrl: './list-logo.component.html',
  styleUrls: ['./list-logo.component.scss']
})
export class ListLogoComponent implements OnInit {

  logos: Observable<Logo[]>;
  constructor(private logoService: LogoService, private router: Router, private matDialog: MatDialog) { }

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
    );
  }

  deleteLogo(id: number): void {
    // this.logoService.deleteLogo(id).subscribe(
    //   data => {
    //     console.log(data);
    //     location.reload();
    //   }
    // ),
    //   error => console.log(error);
    this.openDeleteModal(id);
  }

  editLogo(logo: Logo): void {
    this.openEditModal(logo);
  }


  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "400px";
    const modalDialog = this.matDialog.open(ModalCreateLogoComponent, dialogConfig);
  }

  openDeleteModal(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalDeleteLogoComponent, dialogConfig);
    modalDialog.componentInstance.logoId = id;
  }
  openEditModal(logo: Logo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalEditLogoComponent, dialogConfig);
    modalDialog.componentInstance.oldLogo = logo;
  }

}
