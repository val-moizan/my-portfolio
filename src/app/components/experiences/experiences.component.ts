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
    },
    {
      title: "Alternance chez Sopra Steria",
      imgPath: "assets/formation/sopra.png",
      description: `Je réalise mon alternance de fin d'étude chez Sopra Steria. J'interviens en tant qu'ingénieur 
      programmeur sur différents projets. Du cadrage à la livraison en passant par la conception, le développement
      ainsi que la qualication, mon travail est de mener des projets à terme.`
    },
    {
      title: "Stage au vietnam",
      imgPath: "assets/formation/vietnam.png",
      description: `Je vais réaliser un stage au vietnam sur la période septembre-novembre 2023.`
    }
  ]
}
export class ExperienceObject {
  title!: string;
  imgPath!: string;
  description!: string;
}
