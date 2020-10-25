import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Menu } from 'src/app/model/Menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-modal-create-menu',
  templateUrl: './modal-create-menu.component.html',
  styleUrls: ['./modal-create-menu.component.scss']
})
export class ModalCreateMenuComponent implements OnInit {

  menu = new Menu();
  constructor(private dialogRef: MatDialogRef<ModalCreateMenuComponent>,
    private router: Router, private menuService: MenuService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    console.log(this.menu);
    this.menuService.createMenu(this.menu).subscribe(
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
