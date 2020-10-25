import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Feature } from 'src/app/model/Feature';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-modal-create-feature',
  templateUrl: './modal-create-feature.component.html',
  styleUrls: ['./modal-create-feature.component.scss']
})
export class ModalCreateFeatureComponent implements OnInit {

  feature = new Feature();
  constructor(private dialogRef: MatDialogRef<ModalCreateFeatureComponent>,
    private router: Router, private featureService: FeatureService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void {
    console.log(this.feature);
    this.featureService.createFeature(this.feature).subscribe(
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
