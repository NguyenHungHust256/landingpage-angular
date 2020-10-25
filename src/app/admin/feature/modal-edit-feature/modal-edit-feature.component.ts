import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Feature } from 'src/app/model/Feature';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-modal-edit-feature',
  templateUrl: './modal-edit-feature.component.html',
  styleUrls: ['./modal-edit-feature.component.scss']
})
export class ModalEditFeatureComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ModalEditFeatureComponent>,
    private router: Router, private featureService: FeatureService) { }

  feature: Feature;
  @Input() oldFeature: Feature;

  ngOnInit() {
    this.feature = {...this.oldFeature};
  }
  closeModal(): void {
    this.dialogRef.close();
  }
  onSubmit(): void{
    console.log(this.feature);
    this.featureService.editMenu(this.feature).subscribe(
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
