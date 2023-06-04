import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  informations: FooterInformation[] = [
    {string: "val.moizan@gmail.com", logo: "assets/logos/mail.png", runnable: function func(){
      window.location.href = "mailto:val.moizan@gmail.com"
    }
    },
    {string: "Valentin Moizan", logo: "assets/logos/linkedin.png", runnable: function func(){
      window.open("https://www.linkedin.com/in/valentin-moizan-304945209/", "_blank");
    }},
    {string: "Rennes, Bretagne", logo: "assets/logos/localisation.png", runnable: function func(){
      window.open("https://www.google.fr/maps/place/Rennes/@48.1159843,-1.7296428,13z/data=!3m1!4b1!4m6!3m5!1s0x480ede2fa7d69085:0x40ca5cd36e4ab30!8m2!3d48.117266!4d-1.6777926!16zL20vMGNoam0?entry=ttu", "_blank");
      
    }}
  ]
    
}

export class FooterInformation{
  string!: string;
  logo!: string;
  runnable!: Function;
}
