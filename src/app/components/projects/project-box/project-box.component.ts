import { Component, Input, Inject } from '@angular/core';
import { ProjectObject } from '../projects.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog-component/project-dialog.component';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss']
})

/**
 * Component d'une box d'un projet
 */
export class ProjectBoxComponent {

  /**
   * Projet
   */
  @Input() project!:ProjectObject;


  constructor(public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      maxHeight: '90vh',
      width:'450px',
      data: { myObjectHolder: this.project }
    });
  }

}
