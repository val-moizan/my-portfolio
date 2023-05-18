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
      description: `Je réalise mon alternance de fin d'étude chez Sopra Steria. J'interviens en tant qu'ingénieur programmeur sur différents projets.
      Du cadrage à la livraison en passant par la conception, le développement ainsi que la qualication, mon travail est de mener des projets à terme.`,
      backgroundImgPath: "assets/formation/sopra.png"
    },
    {
      date: "Été 2022",
      title: "Stage chez Sopra Steria",
      description: "J'ai effectué mon stage de 4ème année chez Sopra Steria",
      backgroundImgPath: "assets/formation/sopra.png"
    },
    {
      date: "Été 2019",
      title: "Stage bénévole à Emmaüs",
      description: "J'ai effectué un stage à Emmaüs Rennes",
      backgroundImgPath: "assets/formation/emmaus.png"
    },
    {
      date: "2018-2023",
      title: "ISEN",
      description: "Je suis entré à l'ISEN en réussissant le concours Puissance Alpha",
      backgroundImgPath: "assets/formation/isen.png"
    },
    {
      date: "2018",
      title: "Baccalauréat scientifique",
      description: "J'ai obtenu le Bac S au lycée Sévigné",
      backgroundImgPath: "assets/formation/lycee.png"
    },
    {
      date: "2015",
      title: "Stage chez Orange",
      description: "J'ai effectué mon stage de 3ème chez Orange",
      backgroundImgPath: "assets/formation/orange.png"
    },
  ]
}

export class FormationObject {
  date!: string;
  title!: string;
  description!: string;
  backgroundImgPath!: string;
}