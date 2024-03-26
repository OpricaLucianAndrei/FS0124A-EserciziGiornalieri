import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundRandom]'
})
export class BackgroundRandomDirective {

  constructor(private target: ElementRef, private render: Renderer2) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    this.render.setStyle(this.target.nativeElement, 'background-color', `#${randomColor}`);
   }

}
