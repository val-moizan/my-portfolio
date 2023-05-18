import {Component} from '@angular/core';
@Component({
  selector: 'app-skills-box-list',
  templateUrl: './skills-box-list.component.html',
  styleUrls: ['./skills-box-list.component.scss']
})
export class SkillsBoxListComponent {
  listOfTitles = [
    "Bases de données",
    "Langues",
    "Outils de graphisme",
    "Outils de développement",
    "Développement web",
    "Développement logiciel",
  ]
  listOfLogos = [
    "assets/logos/database.png",
    "assets/logos/earth.svg",
    "assets/logos/tools.svg",
    "assets/logos/dev.svg",
    "assets/logos/web.png",
    "assets/logos/logiciel.svg",
  ]
  listOfSkills = [
    ["MySql", "PhpMyAdmin"],
    ["Français", "Anglais", "Allemand"],
    ["VegasPro", "AfterEffect", "Photoshop"],
    ["JetBrains", "Eclipse", "VSCode", "GitLab"],
    ["HTML", "CSS", "Angular", "Spring Boot", "JavaScript", "PHP", "React", "Symfony"],
    ["Java", "C", "C++", "Python", "QT"]
  ]
  listOfSkillLogos = [
    ["assets/logos/mysql.png", "assets/logos/phpmyadmin.png"],
    ["assets/logos/french.png", "assets/logos/english.png", "assets/logos/german.png"],
    ["assets/logos/svp.png", "assets/logos/ae.png", "assets/logos/photoshop.png"],
    ["assets/logos/jetbrain.png", "assets/logos/eclipse.png", "assets/logos/vscode.png",  "assets/logos/gitlab.png"],
    ["assets/logos/html.png", "assets/logos/css.png", "assets/logos/angular.png", "assets/logos/spring.png", "assets/logos/js.png", "assets/logos/php.png", "assets/logos/react.png", "assets/logos/symfony.jpg"],
    ["assets/logos/java.png", "assets/logos/c.png", "assets/logos/c++.png", "assets/logos/python.png", "assets/logos/qt.png"],
  ]
}
