import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-modal-delete-menu',
  templateUrl: './modal-delete-menu.component.html',
  styleUrls: ['./modal-delete-menu.component.scss']
})
export class ModalDeleteMenuComponent implements OnInit {

  @Input() menuId: number;

  constructor(private dialogRef: MatDialogRef<ModalDeleteMenuComponent>, private router: Router, private menuService: MenuService) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  deleteMenu(): void {
    this.menuService.deleteMenu(this.menuId).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    ),
      error => console.log(error);
  }

}
