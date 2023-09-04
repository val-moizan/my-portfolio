import { Component, HostListener, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrls: ['./language-dropdown.component.scss']
})
export class LanguageDropdownComponent {

  constructor(private translate: TranslateService, private renderer: Renderer2) {

  }
  private opened:boolean = false;

  private language:string = "French";

  public headerFlagPath: string = "assets/logos/french.png";

  clickDropdown():void{
    this.toggleDropDown();
  }

  clickDropdownList(event: Event):void{
    const target:EventTarget|null = event.currentTarget;
    const element: HTMLElement = target as HTMLElement
    const paragraph: HTMLElement = element.getElementsByTagName("p")[0] as HTMLElement;
    this.onLanguageChanged(paragraph.innerHTML);
    this.toggleDropDown();
  }

  onLanguageChanged(newLanguage: string){
    if(newLanguage == this.language)
      return;
    this.language = newLanguage;
    if(this.language == "Français"){
      this.headerFlagPath = "assets/logos/french.png";
      this.translate.use("fr");
    }else if(this.language == "English"){
      this.headerFlagPath = "assets/logos/english.png";
      this.translate.use("en");
    }
  }

  toggleDropDown(){
    const listElement: HTMLElement = document.getElementsByClassName("dropDownList")[0] as HTMLElement
    this.opened = !this.opened;
    listElement.style.height= this.opened ? "100px" : "0px";
    const arrow:HTMLElement = document.getElementById("dropdown_arrow") as HTMLElement
    if(this.opened){
      this.renderer.addClass(arrow, "img-rotate");
    }else {
      this.renderer.removeClass(arrow, "img-rotate");
    }
  }

  @HostListener('window:click', ['$event.target'])
  onClick(target: HTMLElement) {
    const dropdown:HTMLElement = document.getElementById("languageDropdown") as HTMLElement
    if(!dropdown.contains(target)){ //Click hors du dropdown
      if(this.opened){
        this.toggleDropDown()
      }
    }
  }
}
