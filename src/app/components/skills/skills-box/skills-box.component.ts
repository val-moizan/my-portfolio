import { Component, Input } from '@angular/core';
import { SkillBoxObject, SkillObject } from '../skills-box-list/skills-box-list.component';

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
  @Input() skillBox!:SkillBoxObject;

}
