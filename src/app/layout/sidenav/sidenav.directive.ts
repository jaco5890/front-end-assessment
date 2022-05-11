import { Directive, Input, HostListener } from '@angular/core';
import { LayoutService } from '../layout.service';

@Directive({
  selector: '[assessmentSidenav]'
})
export class SidenavDirective {
  @HostListener('mouseenter')

  open() {
    if (!this.ls.expanded) {
      this.ls.sideNavState$.next(true);
    }
  }
  @HostListener('mouseleave')
  close() {
    if (!this.ls.expanded) {
      this.ls.sideNavState$.next(false);
    }
  }
  constructor(public ls: LayoutService) { }

}
