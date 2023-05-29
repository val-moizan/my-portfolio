import { Component, HostListener } from '@angular/core';
import { getTitles } from 'src/app/Utils/Utils';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  private lastSection: string|undefined = undefined;

  scrollToElement(destination: string): void {
    const element = document.querySelector("#" + destination);
    if (element) 
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /**
   * Fonction appelé lors du scroll
   */
  @HostListener('window:scroll')
  onScroll(): void {

      const section = this.getCurrentSectionFromScroll();

      if(this.lastSection != section){
        if(this.lastSection != undefined){
          let lastSectionDiv: HTMLElement = document.getElementsByClassName("link " + this.lastSection)[0] as HTMLElement;
          lastSectionDiv.style.backgroundColor = "transparent"
        }
        if(section != null){
          let sectionDiv: HTMLElement = document.getElementsByClassName("link " + section)[0] as HTMLElement;
          sectionDiv.style.backgroundColor = "rgba(255, 94, 0, 0.5)"
          this.lastSection = section;
        }
      }
        
      
  }

  /**
   * @returns la section de l'utilisateur (présentation, formation..)
   */
  getCurrentSectionFromScroll(): string|undefined{
    const titles:string[] = getTitles()
    let sectionTop = -Infinity;
    let section = undefined;
    titles.forEach(title => {
      const top:number = document.getElementById(title)?.getBoundingClientRect().top!;
      if(top < 0 && top > sectionTop){
        section = title;
        sectionTop = top;
      }
    })
    return section;
  }
}

