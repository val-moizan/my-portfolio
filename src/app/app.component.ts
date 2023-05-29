import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
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
