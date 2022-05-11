import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {
  public sideNavState$: Subject<boolean> = new Subject();
  public expanded = false;
  public isLoading = false;
  public isBusy = false;

  config = {
    header: {
      headerHeight: 60,
      logo: '../../assets/logos/icon.png',
      buttonIcon: 'menu',
      fixed: 'true', 
      backgroundColor: ''
    },
    content: {
      top: 40
    },
    sidenav: {
      expanded: true
    }
  };
  expandedSidenav = false;

  constructor() { }
}
