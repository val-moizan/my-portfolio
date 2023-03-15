import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() titleString:string = "";
  @Input() imgPath:string = "";
  @HostListener('window:scroll')
  onScroll(): void {
    const height = window.innerHeight;
    const title = document.getElementById(this.titleString + "Banner");
    if(title != null){
      const animBanner = Math.min(Math.max((title.getBoundingClientRect().top + title.offsetHeight) / (height + title.offsetHeight), 0), 1);
      title.style.backgroundPosition = "50% " + -500 * animBanner + "px";
    }else{
    }


  }
}
