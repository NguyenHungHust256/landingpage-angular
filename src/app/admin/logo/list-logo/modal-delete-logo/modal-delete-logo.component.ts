import { Component, Input, OnInit } from '@angular/core';
import { LogoService } from './../../logo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-delete-logo',
  templateUrl: './modal-delete-logo.component.html',
  styleUrls: ['./modal-delete-logo.component.css']
})
export class ModalDeleteLogoComponent implements OnInit {

  @Input() logoId: number;
  constructor(private dialogRef: MatDialogRef<ModalDeleteLogoComponent>, private router: Router, private logoService: LogoService) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  deleteLogo(): void {
    this.logoService.deleteLogo(this.logoId).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    ),
      error => console.log(error);
  }
}
