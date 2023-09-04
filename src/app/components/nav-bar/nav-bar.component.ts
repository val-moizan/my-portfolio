import { Component, HostListener } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  private lastSection: string|undefined = undefined;

  private expanded:boolean = false;
  
  private firstLoad: boolean = true;

  private lastWindowWidth: number = 0;
  ngAfterViewInit(){
    this.onScroll();
  }

  /**
   * Permet d'effectuer un smooth scroll à une destination
   * La destination est automatiquement recupérer grâce au innerHTML du bouton cliqué
   */
  scrollToElement(event: Event|null): void {
    let stringTarget = "banner"
    if(event != null){
      const target:EventTarget|null = event.target || event.srcElement || event.currentTarget;
      const linkElement:HTMLElement = target as HTMLElement
      stringTarget = linkElement.innerHTML;
    }
    const element:Element = document.querySelector("#" + stringTarget)!;
    const navBarHeight:number = 50;
    const y:number = element.getBoundingClientRect().top + window.pageYOffset - navBarHeight;

    window.scrollTo({top: y, behavior: 'smooth'});
    if(this.expanded){
      this.expandClickNavBar()
    }
  }

  /**
   * Fonction appelé lors du scroll
   */
  @HostListener('window:scroll')
  async onScroll(): Promise<void> {

      const section: string|undefined = this.getCurrentSectionFromScroll();
      if(this.lastSection != section){
        if(this.lastSection != undefined){
          let lastSectionDiv: HTMLElement = document.getElementsByClassName("link " + this.lastSection)[0] as HTMLElement;
          lastSectionDiv.style.backgroundColor = "transparent"
        }
        if(section != null){
          let sectionDiv: HTMLElement = document.getElementsByClassName("link " + section)[0] as HTMLElement;
          const selectedBorder: HTMLElement = document.querySelector(".selected") as HTMLElement;
          selectedBorder.style.display = "initial";
          if(this.firstLoad){
            this.firstLoad = false;
            await setTimeout(()=>{
              selectedBorder.style.width = sectionDiv.offsetWidth-1 + "px";
              selectedBorder.style.left = sectionDiv.offsetLeft + "px";
            }, 500) //500ms de décalage au premier loading le temps que les fonts se chargent (afin d'avoir la bonne width des élements)
            

          }else{
            selectedBorder.style.width = sectionDiv.offsetWidth-1 + "px";
            selectedBorder.style.left = sectionDiv.offsetLeft + "px";
          }

        }else{
          const selectedBorder: HTMLElement = document.querySelector(".selected") as HTMLElement;
          selectedBorder.style.display = "none";
        }
        this.lastSection = section;
      }
        
      
  }

  /**
   * @returns la section de l'utilisateur (présentation, formation..)
   */
  getCurrentSectionFromScroll(): string|undefined{
    // const titles:string[] = getTitles()
    // let sectionTop = -Infinity;
    // let section = undefined;
    // titles.forEach(title => {
    //   const top:number = document.getElementById(title)?.getBoundingClientRect().top! - 51;
    //   if(top < 0 && top > sectionTop){
    //     section = title;
    //     sectionTop = top;
    //   }
    // })
    // return section;
    return undefined
  }

  /**
   * Fonction appelée lorsque la fenetre est resize
   * @param event 
   */
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    if(event.target.innerWidth >= 550 && this.lastWindowWidth < 550 && this.expanded){ //Si on dépasse la largeur de teléphone
      //on désactive l'expand de la navbar
      this.expandClickNavBar();
    }
    this.lastWindowWidth = event.target.innerWidth;
  }

  /**
   * Appelé lors du click sur l'expand de la navbar
   */
  expandClickNavBar(): void{

    const element: HTMLElement = document.querySelector(".navBar") as HTMLElement;
    element.style.height= this.expanded ? "50px" : "200px";
    this.expanded = !this.expanded;

    const expandLogo: HTMLElement = document.querySelector(".expand") as HTMLElement;
    expandLogo.style.backgroundImage = this.expanded ? "url(assets/logos/navbar_expanded.png)" : "url(assets/logos/navbar.png)";
  }

  @HostListener('window:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const dropdown:HTMLElement = document.getElementsByClassName("navBar")[0] as HTMLElement
    console.log(dropdown.contains(target))
    if(!dropdown.contains(target)){ //Click hors du dropdown
      if(this.expanded){
        this.expandClickNavBar()
      }
    }
  }
}

