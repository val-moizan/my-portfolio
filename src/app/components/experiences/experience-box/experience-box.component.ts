import { Component, Input } from '@angular/core';
import { ExperienceObject } from '../experiences.component';

@Component({
  selector: 'app-experience-box',
  templateUrl: './experience-box.component.html',
  styleUrls: ['./experience-box.component.scss']
})
export class ExperienceBoxComponent {
  /**
   * Expérience
   */
  @Input() experience!:ExperienceObject;

  /**
   * Boolean indiquant true si le texte de la formation doit être affiché à droite
   */
  @Input() isRight:boolean = false;

}
