import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBoxComponent } from './project-box.component';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ProjectBoxComponent', () => {
  let component: ProjectBoxComponent;
  let fixture: ComponentFixture<ProjectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBoxComponent ],
      providers: [
        { provide: MatDialog, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
