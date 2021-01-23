import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBrowseDropdown]'
})
export class BrowseDropdownDirective {

  @HostBinding('class.show') dropdownOpen: boolean = false;

  @HostListener('click') toggleOpen(eventData: Event){ 
    this.dropdownOpen = !this.dropdownOpen;
    if(this.dropdownOpen) {
      console.log("dropdown open")
    } else {
      console.log("dropdown closed");
    }
  }
}
