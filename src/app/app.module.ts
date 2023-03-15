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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
