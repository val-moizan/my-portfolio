import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.scss']
})

/**
 * Component d'une box de compétence
 */
export class SkillsBoxComponent {
  /**
   * Liste des compétences
   */
  @Input() skills:string[] = [];

  /**
   * Liste des logos des compétences
   */
  @Input() skillsLogos:string[] = [];

  /**
   * Logo de la box de compétences
   */
  @Input() logo:string = "";

  /**
   * Titre de la box de compétences
   */
  @Input() boxTitle:string = "";
}
