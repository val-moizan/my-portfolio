import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() titleString:string = "";
  @Input() imgPath:string = "";

  /**
   * Div du titre
   */
   @ViewChild("titleDiv") 
   titleElement!: ElementRef;

  /**
   * Fonction appelé lors du scroll
   */
  @HostListener('window:scroll')
  onScroll(): void {
    const height = window.innerHeight;
    const title = this.titleElement.nativeElement as HTMLElement;
    if(title != null){
      const animBanner = Math.min(Math.max((title.getBoundingClientRect().top + title.offsetHeight) / (height + title.offsetHeight), 0), 1);
      console.log(animBanner)
      title.style.backgroundPositionY = -600 * animBanner + "px";
    }


  }
}
