import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropDown]'
})
export class DropDownDirective {
@HostBinding('class.open') get status(){
  return this.isOpen;
}
  @HostListener('mouseenter') open(){
  this.isOpen = true;
}

  @HostListener('mouseleave') close(){
    this.isOpen = false;
  }

private isOpen = false;
}
