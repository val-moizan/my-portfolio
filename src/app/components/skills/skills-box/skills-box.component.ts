import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-box',
  templateUrl: './skills-box.component.html',
  styleUrls: ['./skills-box.component.css']
})
export class SkillsBoxComponent {
  @Input() skills:string[] = [];
  @Input() skillsLogos:string[] = [];
  @Input() logo:string = "";
  @Input() boxTitle:string = "";
}
