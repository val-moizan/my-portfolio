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
      Cette communauté s'est bâtie autour du logiciel Sigma et notre équipe était constituée de 5 membres.
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
       La technologie mise en avant est la simulation multi agents. Les agents (voitures et piétons) doivent réspecter le code de la route. 
       Certains agents "voyous" ne le respectent pas, et peuvent alors parfois provoquer des accidents`,
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
      backgroundImgPath: "assets/projet/spring-boot-card.png", 
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
          name:"Java",
          logo:"assets/logos/java.png",
        },        
        {
          name:"Spring Boot",
          logo:"assets/logos/spring.png",
        }
      ]
    },
    {
      name: "Portfolio",
      cadre: "Personnel", 
      backgroundImgPath: "assets/projet/portfolio.png", 
      backgroundBoxImgPath: "assets/projet/portfolio.png", 
      smallDescription: "Développement et déploiement de mon portfolio en ligne", 
      description: `J'ai développer mon portfolio en ligne en Angular (https://moizan-valentin.web.app). Le site peut-être facilement mis à jour grâce à Angular 
      et son systeme de component. Mon site web est disponible en open source : https://github.com/val-moizan/my-portfolio. 
      De plus, l'application met en place un déploiement automatique grâce au github workflow. 
      Elle est automatiquement déployée sur firebase lors d'un push sur la branche main`,
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
          name:"SCSS",
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
    },
    {
      name: "IHM de connectivité",
      cadre: "Professionnel", 
      backgroundImgPath: "assets/projet/connectivity.png", 
      backgroundBoxImgPath: "assets/projet/connectivity.png", 
      smallDescription: "Développement fullstack d'une IHM Angular, d'un serveur Spring Boot, et d'un service en Java", 
      description: `J'ai développé une interface de connectivité qui permet d'afficher et de modifier les connexions
      d'un réseau de noeuds. Cette interface est développée en angular et affiche les liens de connectivité entre les noeuds
      sous la forme d'un tableau à deux entrées. L'IHM comporte aussi un serveur spring boot en back qui permet de
      transmettre les informations entre le front et le service.`,
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
        },
        {
          name:"SpringBoot",
          logo:"assets/logos/spring.png",
        },
        {
          name:"Java",
          logo:"assets/logos/java.png",
        }
      ]
    },
    {
      name: "MorIsen",
      cadre: "ISEN", 
      backgroundImgPath: "assets/projet/morisen2.png", 
      backgroundBoxImgPath: "assets/projet/morisen.png", 
      smallDescription: "Développement d'un jeu morpion sur une application android", 
      description: `J'ai développé une application android qui permet de jouer au morpion contre d'autres utilisateurs. La base de donnée est
      stockée sur firebase et permet à l'application de gérer simultanément plusieurs partie. Un joueur peut s'inscrire avec son numéro de téléphone et créer un compte avec 
      ce dernier. Un ratio de victoires - défaites est alors lié à son compte.`,
      date: "2021-2022",
      people: "1",
      role: "Développeur",
      color: "#77c159",
      technologies: [
        {
          name:"Android",
          logo:"assets/logos/android.png",
        },
        {
          name:"Java",
          logo:"assets/logos/java.png",
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