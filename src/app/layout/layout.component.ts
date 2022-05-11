import { Component, ViewChild } from '@angular/core';
import { LayoutService } from './layout.service';
import { onMainContentChange, onSideNavChange } from './sidenav/animation';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
/** This component determines the overall display */
@Component({
  selector: 'assessment-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [onMainContentChange, onSideNavChange]
})
export class LayoutComponent {

  @ViewChild('drawer') sideDrawer: MatDrawer;
  public sideNavChange: boolean;

  constructor(public ls: LayoutService, public router: Router) {
    this.ls.sideNavState$.subscribe(res => {
      this.sideNavChange = res;
    });
  }

  sideNavButtonClicked() {
    this.ls.expanded = !this.ls.expanded;
    this.ls.sideNavState$.next(!this.sideNavChange);
  }
}
