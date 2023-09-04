import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {

  constructor(private translate: TranslateService) {

  }
  
  downloadResume(){
    let link = document.createElement("a");
    link.download = "MOIZAN_Valentin_Resume";
    link.href = "assets/download/MOIZAN_Valentin_Resume.pdf";

    if(this.translate.currentLang == "fr"){
      link.download = "MOIZAN_Valentin_CV";
      link.href = "assets/download/MOIZAN_Valentin_CV.pdf";
    }

    link.click();
  }
}
