import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Navigation } from '../../navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  /**
   * @property {Navigation} navigation Property for navigation items
   */
  public navigation: Navigation;
  constructor(
    private router: Router,
  ) {
    this.navigation = new Navigation();
  }

  /**
   * 
   * @param item Object containing navigation properties
   * @returns {Navigation} Navigation item
   */
  getNavigation(item) {
    return this.navigation[item];
  }
}
