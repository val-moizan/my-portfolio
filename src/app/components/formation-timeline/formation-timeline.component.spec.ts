import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationTimelineComponent } from './formation-timeline.component';
import { FormationComponent } from './formation/formation.component';

describe('FormationTimelineComponent', () => {
  let component: FormationTimelineComponent;
  let fixture: ComponentFixture<FormationTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        FormationTimelineComponent,
        FormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
