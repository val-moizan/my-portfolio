import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

  public frontColor = "#ffffff";
  public backColor: ThemePalette = 'primary';

  public projectList: ProjectObject[] = [
    {name: "50x50", cadre: "Formation ISEN", 
    backgroundImgPath: "assets/projet/50x50.png", 
    smallDescription: `Réalisation d'un maquette de 50x50 cm dans le theme de Black Mirror`, 
    description: `Lors d'un travail de groupe, j'ai participé à la réalisation d'une maquette. Nous avions comme consigne de faire une maquette de 50 x 50 cm
     en tant qu'ingénieur chez Black Mirror. Avec cette maquette, nous avons voulu mettre en scène une entité représentant les technologies, qui domine notre société.`},

    {name: "Borne d'arcade",
    cadre: "Associatif", 
    backgroundImgPath: "assets/projet/arcade.png", 
    smallDescription: "", 
    description: ""}
  ]
  ngOnInit(){
  }
}

export class ProjectObject {
  name!: string;
  cadre!: string;
  backgroundImgPath!: string;
  description!: string;
  smallDescription!: string;
}