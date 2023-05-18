import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-portfolio';
  presentationTitleData: TitleData= { title:"Présentation",backgroundImgPath: "assets/backgrounds/sea.jpg" }
  skillsTitleData: TitleData= { title:"Compétences", backgroundImgPath: "assets/backgrounds/bgskills.jpg" }
  projectsTitleData: TitleData= { title:"Projets", backgroundImgPath: "assets/backgrounds/bgprojets.jpeg"}
  experiencesTitleData: TitleData= { title:"Expériences", backgroundImgPath: "assets/backgrounds/sunset.jpg"}
  formationTitleData: TitleData= { title:"Formation", backgroundImgPath: "assets/backgrounds/bgprojets.jpeg"}




}

export class TitleData{
  title!: string;
  backgroundImgPath!: string;
}
