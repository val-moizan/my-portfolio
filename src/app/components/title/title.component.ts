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

  @HostListener('window:scroll')
  onScroll(): void {
    const height = window.innerHeight;
    const title = this.titleElement.nativeElement as HTMLElement;
    const imgHeight: number = 2160;
    if(title != null){
      const animBanner = Math.min(Math.max((title.getBoundingClientRect().top + title.offsetHeight) / (height + title.offsetHeight), 0), 1);
      title.style.backgroundPosition = "50% " + -400 * animBanner + "px";
    }else{
    }


  }
}
