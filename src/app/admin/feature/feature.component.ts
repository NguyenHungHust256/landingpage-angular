import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../../model/Feature';
import { FeatureService} from './feature.service';
import { ModalCreateFeatureComponent } from './modal-create-feature/modal-create-feature.component';
import { ModalDeleteFeatureComponent } from './modal-delete-feature/modal-delete-feature.component';
import { ModalEditFeatureComponent } from './modal-edit-feature/modal-edit-feature.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  features: Observable<Feature[]>;
  constructor(private featureService: FeatureService, private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.featureService.listFeatures().subscribe(
      data => {
        this.features = data;
        console.log(this.features);
      },
      error => {
        console.error(error);
      }
    );
  }

  deleteFeature(id: number): void {
    this.openDeleteModal(id);
  }

  editFeature(feature: Feature): void {
    this.openEditModal(feature);
  }


  openCreateModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "300px";
    dialogConfig.width = "400px";
    const modalDialog = this.matDialog.open(ModalCreateFeatureComponent, dialogConfig);
  }

  openDeleteModal(id: number): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalDeleteFeatureComponent, dialogConfig);
    modalDialog.componentInstance.featureId = id;
  }

  openEditModal(feature: Feature): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.height = "300px";
    dialogConfig.width = "300px";
    const modalDialog = this.matDialog.open(ModalEditFeatureComponent, dialogConfig);
    modalDialog.componentInstance.oldFeature = feature;
  }
}
