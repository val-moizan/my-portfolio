import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  /**
   * Div de la carte du banner
   */
  @ViewChild("cardElement") cardElement!: ElementRef;

  /**
   * true = animation de scroll en cours
   */
  private animationRunning: boolean = false;

  /**
   * Fonction d'init
   */
  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles/particles.json', null);
  }

  /**
   * Fonction qui permet de scroll vers le bas
   */
  scrollBanner(): void {
    if(this.animationRunning) return;

    this.animationRunning = true;
    this.cardElement.nativeElement.classList.add("slide-out-top"); //Début du scroll vers le haut de la card
    this.cardElement.nativeElement.classList.remove("floating"); 
    setTimeout(() => {
      const height: number = window.innerHeight - 50;
      window.scrollTo({ top: height, left: 0, behavior: 'smooth' }); //Début du scroll vers le bas
      setTimeout(() => {
        this.cardElement.nativeElement.classList.remove("slide-out-top"); //On remet la card
        this.cardElement.nativeElement.classList.add("floating"); 
        this.animationRunning = false;
      }, 250)
  }, 400);

  }

  /**
   * Fonction de scroll
   */
  @HostListener('window:scroll')
  onScroll(): void {
    const top: number = window.scrollY;
    const height: number = window.innerHeight;
    const banner: HTMLElement = document.getElementById("banner")!;
    let diff = height - top;
    if(diff < height/2){
      diff = height/2;
    }

   // banner.style.height = diff + "px"; //réduction de la hauteur de la banner lorsqu'on scroll vers le bas
    
  }



}
