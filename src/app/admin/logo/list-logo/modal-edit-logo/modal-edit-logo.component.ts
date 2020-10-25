import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoService } from './../../logo.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Logo } from '../../../../model/Logo';

@Component({
  selector: 'app-modal-edit-logo',
  templateUrl: './modal-edit-logo.component.html',
  styleUrls: ['./modal-edit-logo.component.scss']
})
export class ModalEditLogoComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalEditLogoComponent>, private router: Router, private logoService: LogoService) { }
  logo: Logo;
  @Input() oldLogo: Logo;
  ngOnInit() {
    this.logo = {...this.oldLogo};
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void{
    console.log(this.logo);
    this.logoService.editLogo(this.logo).subscribe(
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
