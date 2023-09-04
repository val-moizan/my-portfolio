import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }
  presentationTitleData: TitleData= { title:"Présentation",backgroundImgPath: "assets/backgrounds/sea.png" }
  skillsTitleData: TitleData= { title:"Compétences", backgroundImgPath: "assets/backgrounds/skills.png" }
  projectsTitleData: TitleData= { title:"Projets", backgroundImgPath: "assets/backgrounds/projet.png"}
  experiencesTitleData: TitleData= { title:"Expériences", backgroundImgPath: "assets/backgrounds/experiences.jpg"}
  formationTitleData: TitleData= { title:"Formation", backgroundImgPath: "assets/backgrounds/formation.png"}

}

export class TitleData{
  title!: string;
  backgroundImgPath!: string;
}
