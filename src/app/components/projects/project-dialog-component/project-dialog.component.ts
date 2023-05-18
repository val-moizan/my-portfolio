import { Component, Inject, OnInit} from '@angular/core';
import { ProjectObject } from '../projects.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  public projectFooterInformations: {title: string, information: string}[] = [];

  ngOnInit() {
    this.projectFooterInformations[0] = {title: "Cadre", information: this.project.cadre};
    this.projectFooterInformations[1] = {title: "Équipe", information: this.project.people};
    this.projectFooterInformations[2] = {title: "Rôle", information: this.project.role};

  }
}