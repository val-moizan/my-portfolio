import {Component} from '@angular/core';
@Component({
  selector: 'app-skills-box-list',
  templateUrl: './skills-box-list.component.html',
  styleUrls: ['./skills-box-list.component.scss']
})
export class SkillsBoxListComponent {
  skillBoxes: SkillBoxObject[]= [
    {
      title: "Bases de données", boxLogo: "assets/logos/database.png", skills: [
        {name : "MySql", logo: "assets/logos/mysql.png"},{name : "PhpMyAdmin", logo: "assets/logos/phpmyadmin.png"}
      ]
    },
    {
      title: "Langues", boxLogo: "assets/logos/earth.svg", skills: [
        {name : "Français", logo: "assets/logos/french.png"},{name : "Anglais", logo: "assets/logos/english.png"},{name : "Allemand", logo: "assets/logos/german.png"}
      ]
    },
    {
      title: "Outils de graphisme", boxLogo: "assets/logos/tools.svg", skills: [
        {name : "VegasPro", logo: "assets/logos/svp.png"},{name : "AfterEffect", logo: "assets/logos/ae.png"},{name : "Photoshop", logo: "assets/logos/photoshop.png"}
      ]
    },
    {
      title: "Outils de développement", boxLogo: "assets/logos/dev.svg", skills: [
        {name : "JetBrains", logo: "assets/logos/jetbrain.png"},{name : "Eclipse", logo: "assets/logos/eclipse.png"},{name : "VSCode", logo: "assets/logos/vscode.png"},
        {name : "GitLab", logo: "assets/logos/gitlab.png"}
      ]
    },
    {
      title: "Développement web", boxLogo: "assets/logos/web.png", skills: [
        {name : "HTML", logo: "assets/logos/html.png"},{name : "CSS", logo: "assets/logos/css.png"},{name : "Angular", logo: "assets/logos/angular.png"},
        {name : "Spring Boot", logo: "assets/logos/spring.png"},{name : "JavaScript", logo: "assets/logos/js.png"},{name : "PHP", logo: "assets/logos/php.png"},
        {name : "React", logo: "assets/logos/react.png"},{name : "Symfony", logo: "assets/logos/symfony.jpg"}
      ]
    },
    {
      title: "Développement logiciel", boxLogo: "assets/logos/logiciel.svg", skills: [
        {name : "Java", logo: "assets/logos/java.png"},{name : "C", logo: "assets/logos/c.png"},{name : "C++", logo: "assets/logos/c++.png"},
        {name : "Python", logo: "assets/logos/python.png"},{name : "QT", logo: "assets/logos/qt.png"},{name : "Android", logo: "assets/logos/android.png"}
      ]
    }
  ]
}
/**
 * Objet représentant une box de compétences
 */
export class SkillBoxObject{
  title!: string;
  boxLogo!: string;
  skills!: SkillObject[];
}

/**
 * Objet représentant une compétence
 */
export class SkillObject{
  name!: string;
  logo!: string;
}
