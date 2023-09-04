import { Component } from '@angular/core';

@Component({
  selector: 'app-formation-timeline',
  templateUrl: './formation-timeline.component.html',
  styleUrls: ['./formation-timeline.component.scss']
})
export class FormationTimelineComponent {

  public formationList: FormationObject[] = [
    {
      date: "2022-2023",
      title: "portfolio.formation.sopraApprenticeship",
      backgroundImgPath: "assets/formation/sopra.png"
    },
    {
      date: "portfolio.formation.summer2022",
      title: "portfolio.formation.sopraInternship",
      backgroundImgPath: "assets/formation/sopra.png"
    },
    {
      date: "portfolio.formation.summer2019",
      title: "portfolio.formation.emmaus",
      backgroundImgPath: "assets/formation/emmaus.png"
    },
    {
      date: "2018-2023",
      title: "portfolio.formation.isen",
      backgroundImgPath: "assets/formation/isen.png"
    },
    {
      date: "2018",
      title: "portfolio.formation.baccalaureate",
      backgroundImgPath: "assets/formation/lycee.png"
    },
    {
      date: "2015",
      title: "portfolio.formation.orange",
      backgroundImgPath: "assets/formation/orange.png"
    },
  ]
}

export class FormationObject {
  date!: string;
  title!: string;
  backgroundImgPath!: string;
}