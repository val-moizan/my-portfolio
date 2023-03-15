import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';

  skillsTitleData = ["Compétences", "assets/backgrounds/bgskills.jpg"]
  projectsTitleData = ["Projets", "assets/backgrounds/bgprojets.jpeg"]
}
