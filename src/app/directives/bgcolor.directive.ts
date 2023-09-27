import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {
  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor="red"
   }

}
