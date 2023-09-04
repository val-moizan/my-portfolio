import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { subscribeTitles } from './Utils/Utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
    subscribeTitles(translate);
  }
}

export class TitleData{
  title!: string;
  backgroundImgPath!: string;
}
