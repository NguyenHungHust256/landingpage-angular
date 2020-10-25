import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Menu } from './../../model/Menu';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {MenuService} from './menu.service';
import { ModalCreateMenuComponent } from './modal-create-menu/modal-create-menu.component';
import { ModalDeleteMenuComponent } from './modal-delete-menu/modal-delete-menu.component';
import { ModalEditMenuComponent } from './modal-edit-menu/modal-edit-menu.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: Observable<Menu[]>;
  constructor(private menuService: MenuService, private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.menuService.listMenus().subscribe(
      data => {
        this.menus = data;
        console.log(this.menus);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteMenu(id: number): void {
    this.openDeleteModal(id);
  }

  editMenu(menu: Menu): void {
    this.openEditModal(menu);
  }


  openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "300px";
    dialogConfig.width = "400px";
    const modalDialog = this.matDialog.open(ModalCreateMenuComponent, dialogConfig);
  }

  openDeleteModal(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalDeleteMenuComponent, dialogConfig);
    modalDialog.componentInstance.menuId = id;
  }

  openEditModal(menu: Menu) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalEditMenuComponent, dialogConfig);
    modalDialog.componentInstance.oldMenu = menu;
  }
}
