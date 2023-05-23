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
      title: "Alternance chez Sopra Steria",
      backgroundImgPath: "assets/formation/sopra.png"
    },
    {
      date: "Été 2022",
      title: "Stage chez Sopra Steria",
      backgroundImgPath: "assets/formation/sopra.png"
    },
    {
      date: "Été 2019",
      title: "Stage bénévole à Emmaüs",
      backgroundImgPath: "assets/formation/emmaus.png"
    },
    {
      date: "2018-2023",
      title: "École d'ingénieur ISEN, domaine du génie logiciel",
      backgroundImgPath: "assets/formation/isen.png"
    },
    {
      date: "2018",
      title: "Baccalauréat scientifique",
      backgroundImgPath: "assets/formation/lycee.png"
    },
    {
      date: "2015",
      title: "Stage de 3ème chez Orange",
      backgroundImgPath: "assets/formation/orange.png"
    },
  ]
}

export class FormationObject {
  date!: string;
  title!: string;
  backgroundImgPath!: string;
}