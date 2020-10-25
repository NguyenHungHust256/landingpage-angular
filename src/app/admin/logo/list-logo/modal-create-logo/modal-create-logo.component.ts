import { Router } from '@angular/router';
import { LogoService } from './../../logo.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Logo } from '../../../../model/Logo';
@Component({
  selector: 'app-modal-create-logo',
  templateUrl: './modal-create-logo.component.html',
  styleUrls: ['./modal-create-logo.component.scss']
})
export class ModalCreateLogoComponent implements OnInit {
  logo = new Logo();
  constructor(private dialogRef: MatDialogRef<ModalCreateLogoComponent>, private router: Router, private logoService: LogoService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void{
    console.log(this.logo);
    this.logoService.createLogo(this.logo).subscribe(
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
