import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBoxListComponent } from './skills-box-list.component';
import { SkillsBoxComponent } from '../skills-box/skills-box.component';

describe('SkillsBoxListComponent', () => {
  let component: SkillsBoxListComponent;
  let fixture: ComponentFixture<SkillsBoxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        SkillsBoxListComponent,
        SkillsBoxComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
