import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  public experienceList: ExperienceObject[] = [
    {
      title: "Stage bénévole à Emmaüs",
      imgPath: "assets/formation/emmaus.png",
      description: `Dans le cadre de mes études, j'ai réalisé un stage de deux semaines à Emmaüs Rennes.
       J'y ai appris à gérer une boutique et à vendre des produits. Ce stage m'a beaucoup aidé à m'améliorer sur le côté humain et relationnel.`
    },
    {
      title: "Président du club info",
      imgPath: "assets/logos/CI.png",
      description: `Pendant ma deuxième année à l'ISEN Rennes, j'ai pris les rênes du club info. 
      J'ai eu l'occasion d'organiser des lan, des cours de soutien pour les premières années ou encore des évênements. 
      Durant cette année, je me suis développé sur l'aspect humain mais aussi technique en lançant des projets.`
    }
  ]
}
export class ExperienceObject {
  title!: string;
  imgPath!: string;
  description!: string;
}
