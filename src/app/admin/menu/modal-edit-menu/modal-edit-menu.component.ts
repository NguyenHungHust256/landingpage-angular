import { Menu } from './../../../model/Menu';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MenuService } from '../menu.service';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-menu',
  templateUrl: './modal-edit-menu.component.html',
  styleUrls: ['./modal-edit-menu.component.scss']
})
export class ModalEditMenuComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalEditMenuComponent>,
    private router: Router, private menuService: MenuService) { }

  menu: Menu;
  @Input() oldMenu: Menu;

  ngOnInit() {
    this.menu = {...this.oldMenu};
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void{
    console.log(this.menu);
    this.menuService.editMenu(this.menu).subscribe(
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
