import { Directive,EffectRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBluecolor]'
})
export class BluecolorDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor="blue";
   }

}
