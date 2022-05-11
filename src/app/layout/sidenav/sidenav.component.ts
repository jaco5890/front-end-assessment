import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { NavService } from './nav-service';
import { animateText, onMainContentChange, onSideNavChange } from './animation';

@Component({
  selector: 'assessment-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [animateText, onMainContentChange, onSideNavChange]
})
export class SidenavComponent implements OnInit {
  nav: any[] = [];
  public linkText = false;

  public sideNavState = false;

  constructor(public ls: LayoutService, public navService: NavService) {
    this.ls.sideNavState$.subscribe(res => {
      this.sideNavState = res;
    });
  }

  ngOnInit() {
    this.nav = this.navService.getNavigation('navItems');
  }

  onSidenavToggle() {
    this.sideNavState = !this.sideNavState;
    this.ls.sideNavState$.next(this.sideNavState);
  }

  checkRoute(page,ac){
  }
}
