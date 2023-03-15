import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
@Directive({
  selector: '[setBackgroundImage]'
})
export class SetBackgroundImageDirective implements OnInit {
  @Input() imageUrl: string | undefined;
  constructor(private elementRef:ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundImage',
      `url(${this.imageUrl})`
    );
  }
}
