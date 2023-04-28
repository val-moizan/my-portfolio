import { Component, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { ProjectObject } from '../projects.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.scss']
})
export class ProjectDialogComponent {

  public project: ProjectObject;

  constructor(@Inject(MAT_DIALOG_DATA) data: { myObjectHolder: ProjectObject }) {
      this.project = data.myObjectHolder;
  }

  ngOnInit() {


  }
}