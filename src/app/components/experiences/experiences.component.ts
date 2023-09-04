import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  public experienceList: ExperienceObject[] = [
    {
      title: "portfolio.experiences.titles.emmaus",
      imgPath: "assets/formation/emmaus.png",
      description: `portfolio.experiences.descriptions.emmaus`
    },
    {
      title: "portfolio.experiences.titles.infoClub",
      imgPath: "assets/logos/CI.png",
      description: `portfolio.experiences.descriptions.infoClub`
    },
    {
      title: "portfolio.experiences.titles.sopra",
      imgPath: "assets/formation/sopra.png",
      description: `portfolio.experiences.descriptions.sopra`
    },
    {
      title: "portfolio.experiences.titles.vietnam",
      imgPath: "assets/formation/vietnam.png",
      description: `portfolio.experiences.descriptions.vietnam`
    }
  ]
}
export class ExperienceObject {
  title!: string;
  imgPath!: string;
  description!: string;
}
