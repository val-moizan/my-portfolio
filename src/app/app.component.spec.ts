import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SkillsBoxComponent } from './components/skills/skills-box/skills-box.component';
import { SkillsBoxListComponent } from './components/skills/skills-box-list/skills-box-list.component';
import { BannerComponent } from './components/banner/banner.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TitleComponent } from './components/title/title.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ExperienceBoxComponent } from './components/experiences/experience-box/experience-box.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FormationTimelineComponent } from './components/formation-timeline/formation-timeline.component';
import { FormationComponent } from './components/formation-timeline/formation/formation.component';
import { ProjectDialogComponent } from './components/projects/project-dialog-component/project-dialog.component';
import { ProjectBoxComponent } from './components/projects/project-box/project-box.component';
import { ProjectsComponent } from './components/projects/projects.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SkillsBoxComponent,
        SkillsBoxListComponent,
        BannerComponent,
        PresentationComponent,
        TitleComponent,
        ProjectsComponent,
        ProjectBoxComponent,
        ProjectDialogComponent,
        FormationTimelineComponent,
        FormationComponent,
        ExperiencesComponent,
        ExperienceBoxComponent,
        NavBarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-portfolio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-portfolio app is running!');
  });
});
