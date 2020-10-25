import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-modal-delete-feature',
  templateUrl: './modal-delete-feature.component.html',
  styleUrls: ['./modal-delete-feature.component.scss']
})
export class ModalDeleteFeatureComponent implements OnInit {

  @Input() featureId: number;

  constructor(private dialogRef: MatDialogRef<ModalDeleteFeatureComponent>, 
    private router: Router, private featureService: FeatureService) { }

  ngOnInit() {
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  deleteFeature(): void {
    this.featureService.deleteFeature(this.featureId).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    ),
      error => console.log(error);
  }
}
