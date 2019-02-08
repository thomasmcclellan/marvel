import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundSize]'
})
export class BackgroundSizeDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundSize = 'cover'
  }

}
