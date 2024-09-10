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
      name: "portfolio.projects.titles.arcadeTerminal",
      cadre: "portfolio.projects.scope.associative", 
      backgroundImgPath: "assets/projet/arcade2.png", 
      backgroundBoxImgPath: "assets/projet/arcade.png",
      smallDescription: "portfolio.projects.smallDescriptions.arcadeTerminal", 
      description: `portfolio.projects.descriptions.arcadeTerminal`,
      date: "2019-2020",
      people: "2-4",
      role: "portfolio.projects.role.president",
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
      cadre: "portfolio.projects.scope.personnal", 
      backgroundImgPath: "assets/projet/sigma.png", 
      backgroundBoxImgPath: "assets/projet/sigma.png", 
      smallDescription: "portfolio.projects.smallDescriptions.sigma", 
      description: `portfolio.projects.descriptions.sigma`,
      date: "2016-2021",
      people: "5",
      role: "portfolio.projects.role.projectManager",
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
      smallDescription: "portfolio.projects.smallDescriptions.isenPlatform", 
      description: `portfolio.projects.descriptions.isenPlatform`,
      date: "2020",
      people: "1",
      role: "portfolio.projects.role.developer",
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
      smallDescription: "portfolio.projects.smallDescriptions.abmuCarrefour", 
      description: `portfolio.projects.descriptions.abmuCarrefour`,
      date: "2022",
      people: "2",
      role: "portfolio.projects.role.developer",
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
      smallDescription: "portfolio.projects.smallDescriptions.apiSpring", 
      description: `portfolio.projects.descriptions.apiSpring`,
      date: "2023",
      people: "4",
      role: "portfolio.projects.role.developer",
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
      cadre: "portfolio.projects.scope.personnal", 
      backgroundImgPath: "assets/projet/portfolio.png", 
      backgroundBoxImgPath: "assets/projet/portfolio.png", 
      smallDescription: "portfolio.projects.smallDescriptions.portfolio", 
      description: `portfolio.projects.descriptions.portfolio`,
      date: "2023",
      people: "1",
      role: "portfolio.projects.role.developer",
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
      name: "portfolio.projects.titles.connectivityHMI",
      cadre: "portfolio.projects.scope.professional", 
      backgroundImgPath: "assets/projet/connectivity.png", 
      backgroundBoxImgPath: "assets/projet/connectivity.png", 
      smallDescription: "portfolio.projects.smallDescriptions.hmiConnectivity", 
      description: `portfolio.projects.descriptions.hmiConnectivity`,
      date: "2023",
      people: "1",
      role: "portfolio.projects.role.developer",
      color: "#3446eb",
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
      smallDescription: "portfolio.projects.smallDescriptions.morIsen", 
      description: `portfolio.projects.descriptions.morIsen`,
      date: "2021-2022",
      people: "1",
      role: "portfolio.projects.role.developer",
      color: "#dea2fc",
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
    },
    {
      name: "TDA",
      cadre: "portfolio.projects.scope.professional", 
      backgroundImgPath: "assets/projet/tda.png", 
      backgroundBoxImgPath: "assets/projet/tda.png", 
      smallDescription: "portfolio.projects.smallDescriptions.tda", 
      description: `portfolio.projects.descriptions.tda`,
      date: "2024",
      people: "4-5",
      role: "portfolio.projects.role.leadDeveloper",
      color: "#12ABDB",
      technologies: [
        {
          name:"ReactJS",
          logo:"assets/logos/react.png",
        },
        {
          name:"ExpressJS",
          logo:"assets/logos/expressjs.png",
        },
        {
          name:"GraphQL",
          logo:"assets/logos/graphql.png",
        },
        {
          name:"PostgreSQL",
          logo:"assets/logos/postgresql.png",
        },
        {
          name:"Sequelize",
          logo:"assets/logos/sequelize.png",
        },
        {
          name:"Python",
          logo:"assets/logos/python.png",
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