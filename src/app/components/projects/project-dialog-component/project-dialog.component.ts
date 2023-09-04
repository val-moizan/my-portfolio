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
    this.projectFooterInformations[0] = {title: "portfolio.projects.scope.scope", information: this.project.cadre};
    this.projectFooterInformations[1] = {title: "portfolio.projects.team", information: this.project.people};
    this.projectFooterInformations[2] = {title: "portfolio.projects.role.role", information: this.project.role};

  }
}