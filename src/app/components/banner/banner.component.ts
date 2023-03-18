import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @ViewChild("skillsComponent") comp: ElementRef | undefined;
  arrowPath = "assets/logos/arrow.png";
  scrollBanner(): void {
    const height = window.innerHeight;
    window.scrollTo({ top: height/2, left: 0, behavior: 'smooth' });
  }
  @HostListener('window:scroll')
  onScroll(): void {
    const top = window.scrollY;
    const height = window.innerHeight;
    const banner = document.getElementById("banner");
    if(banner != null) {
      let diff = height - top;
      if(diff < height/2){
        diff = height/2;
      }

      banner.style.height = diff + "px"; //réduction de la hauteur de la banner lorsqu'on scroll vers le bas
    }
  }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles/particles.json', null);
  }



}
