import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  scrollToElement(destination: string): void {
    const element = document.querySelector("#" + destination);
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

