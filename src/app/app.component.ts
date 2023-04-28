import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-portfolio';
  presentationTitleData = ["Présentation", "assets/backgrounds/sea.jpg"]
  skillsTitleData = ["Compétences", "assets/backgrounds/bgskills.jpg"]
  projectsTitleData = ["Projets", "assets/backgrounds/bgprojets.jpeg"]




}
