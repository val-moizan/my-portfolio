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
    {
      name: "50x50", cadre: "ISEN", 
      backgroundImgPath: "assets/projet/50x50.png", 
      backgroundBoxImgPath: "assets/projet/50x50.png",
      smallDescription: `Réalisation d'une maquette de 50x50 cm dans le theme de Black Mirror`, 
      description: `Lors d'un travail de groupe, j'ai participé à la réalisation d'une maquette. Nous avions comme consigne de faire une maquette de 50 x 50 cm
      en tant qu'ingénieur chez Black Mirror. Avec cette maquette, nous avons voulu mettre en scène une entité représentant les technologies, qui domine notre société.`,
      date: "2018-2019",
      people: "2",
      role: "Maquettiste",
      color: "#FF4B06",
    },
    {
      name: "Borne d'arcade",
      cadre: "Associatif", 
      backgroundImgPath: "assets/projet/arcade2.png", 
      backgroundBoxImgPath: "assets/projet/arcade.png",
      smallDescription: "", 
      description: `Avec deux camarades de classe ainsi que l'aide financière du Club Info, nous nous sommes lancés dans l'idée de créer de toutes pièces une borne
       d'arcade qui serait installée dans les locaux de l'ISEN Rennes. Le côté physique a été rapidement terminé mais le support informatique a prit du temps. 
       Nous devions développer un menu principal de la borne qui puisse prendre en compte tous les jeux de celle-ci. Le but étant que les futurs Isenniens puissent 
       coder et ajouter des jeux à leur guise sur la borne.`,
      date: "2019-2020",
      people: "2-4",
      role: "Président",
      color: "#EB0766",
      technologies: [
        {
          name:"C++",
          logo:"assets/logos/c++.png",
        }
      ]
    }
    ,
    {
      name: "Sigma",
      cadre: "Personnel", 
      backgroundImgPath: "assets/projet/sigma.png", 
      backgroundBoxImgPath: "assets/projet/sigma.png", 
      smallDescription: "", 
      description: `Sigma production était une organisation créée par un ami et moi. On s'est lancé dans une aventure qui avait pour but de développer et mettre 
      en ligne une amélioration du jeu Minecraft. Cette expérience m'a permis de découvrir énormément de choses en Java et de gérer une communauté. 
      Cette communauté s'est bâtie autour du logiciel Sigma notre équipe était constituée de 5 membres.
      Chaque jours, plus de 6000 utilisateurs uniques visitaient notre site internet. Parmis ces visiteurs, 4000 téléchargaient notre logiciel`,
      date: "2016-2021",
      people: "5",
      role: "Chef de projet",
      color: "#380038",
      technologies: [
        {
          name:"Java",
          logo:"assets/logos/java.png",
        },
        {
          name:"MySql",
          logo:"assets/logos/mysql.png",
        }
      ]
    },
    {
      name: "ISEN Platform",
      cadre: "ISEN", 
      backgroundImgPath: "assets/projet/isenplatform.png", 
      backgroundBoxImgPath: "assets/projet/isenplatform.png", 
      smallDescription: "Développement d'un jeux type platform 2D", 
      description: `Dans le cadre de mes études, j'ai été amené à créer un logiciel de jeux de palteforme.
       La difficulté de ce projet était le fait que l'on partait de rien. L'environnement a dû être crée de toute pièce (ex: la gravité, les collisions).
        Enfin, afin de rendre accessible le jeux, j'ai mis en place un installer. Il suffit de le télécharger et de le lancer pour installer le jeux sur votre ordinateur`,
      date: "2020",
      people: "1",
      role: "Développeur",
      color: "#375a78",
      technologies: [
        {
          name:"C++",
          logo:"assets/logos/c++.png",
        },
        {
          name:"QT",
          logo:"assets/logos/qt.png",
        }
      ]
    },
    {
      name: "ABMU-Carrefour",
      cadre: "ISEN", 
      backgroundImgPath: "assets/backgrounds/unity.png", 
      backgroundBoxImgPath: "assets/backgrounds/unity.png", 
      smallDescription: "Développement d'un environnement 3D sous unity", 
      description: `ABMU-Carrefour est un projet réalisé dans le cadre du projet M1 à l'ISEN.
       Il a pour but de générer une simulation de carrefour routier avec le logiciel Unity et le framework ABMU. 
       La technologie mise en avant est la simulation multi agent.`,
      date: "2022",
      people: "2",
      role: "Développeur",
      color: "#63686d",
      technologies: [
        {
          name:"C#",
          logo:"assets/logos/csharp.png",
        }
      ]
    },
    {
      name: "API-Spring",
      cadre: "ISEN", 
      backgroundImgPath: "assets/projet/spring-boot.png", 
      backgroundBoxImgPath: "assets/projet/spring-boot.png", 
      smallDescription: "Développement d'une API spring boot", 
      description: `Dans le cadre des cours sur le framework Java Spring Boot en 5ème année à l'ISEN, j'ai été amené à développer
      une API.`,
      date: "2023",
      people: "4",
      role: "Développeur",
      color: "#6db33f",
      technologies: [
        {
          name:"C#",
          logo:"assets/logos/csharp.png",
        }
      ]
    },
    {
      name: "Portfolio",
      cadre: "Personnel", 
      backgroundImgPath: "assets/projet/portfolio.png", 
      backgroundBoxImgPath: "assets/projet/portfolio.png", 
      smallDescription: "Développement et déploiement de mon portfolio en ligne", 
      description: `J'ai développer mon portfolio en ligne en Angular. Le site peut-être facilement mis à jour grâce à Angular et son systeme de component.
       Mon site web est disponible en open source : https://github.com/val-moizan/my-portfolio`,
      date: "2023",
      people: "1",
      role: "Développeur",
      color: "#2CD4AF",
      technologies: [
        {
          name:"Angular",
          logo:"assets/logos/angular.png",
        },
        {
          name:"CSS",
          logo:"assets/logos/css.png",
        },
        {
          name:"HTML",
          logo:"assets/logos/html.png",
        },
        {
          name:"Typescript",
          logo:"assets/logos/typescript.png",
        }
      ]
    }
  ]
  ngOnInit(){
  }
}

export class ProjectObject {
  name!: string;
  cadre!: string;
  backgroundImgPath!: string;
  backgroundBoxImgPath!: string;
  description!: string;
  smallDescription!: string;
  date!: string;
  people!: string;
  role!: string;
  technologies?: TechnologiesObject[];
  color!: string;
}
export class TechnologiesObject{
  name!: string;
  logo!: string;
}