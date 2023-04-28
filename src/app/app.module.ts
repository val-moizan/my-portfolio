import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {SkillsBoxComponent} from './components/skills/skills-box/skills-box.component';
import {SkillsBoxListComponent} from './components/skills/skills-box-list/skills-box-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {BannerComponent} from './components/banner/banner.component';
import {AppRoutingModule} from './app-routing.module';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TitleComponent } from './components/title/title.component';
import { SetBackgroundImageDirective } from './directives/SetBackgroundImageDirective/set-background-image-directive.directive';
import {MatDividerModule} from '@angular/material/divider';
import { ProjectsComponent } from './components/projects/projects.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { ProjectBoxComponent } from './components/projects/project-box/project-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectDialogComponent } from './components/projects/project-dialog-component/project-dialog.component';
@NgModule({
  exports:[SetBackgroundImageDirective],
  declarations: [
    AppComponent,
    SkillsBoxComponent,
    SkillsBoxListComponent,
    BannerComponent,
    PresentationComponent,
    TitleComponent,
    SetBackgroundImageDirective,
    ProjectsComponent,
    ProjectBoxComponent,
    ProjectDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    MatDividerModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
