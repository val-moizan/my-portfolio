import { Component, Input } from '@angular/core';
import { FormationObject } from '../formation-timeline.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {
  /**
   * Formation
   */
  @Input() formation!:FormationObject;

  /**
   * Boolean indiquant true si le texte de la formation doit être affiché à droite
   */
  @Input() isRight:boolean = false;
}
