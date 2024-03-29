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
import { ProjectsComponent } from './components/projects/projects.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { ProjectBoxComponent } from './components/projects/project-box/project-box.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProjectDialogComponent } from './components/projects/project-dialog-component/project-dialog.component';
import { FormationTimelineComponent } from './components/formation-timeline/formation-timeline.component';
import { FormationComponent } from './components/formation-timeline/formation/formation.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceBoxComponent } from './components/experiences/experience-box/experience-box.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/footer/footer.component';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { LanguageDropdownComponent } from './components/language-dropdown/language-dropdown.component'; 


@NgModule({
  exports:[],
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
    NavBarComponent,
    FooterComponent,
    LanguageDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSelectModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}