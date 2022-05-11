import { Component } from '@angular/core';
import { profileUpdate } from '../animation';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'assessment-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [profileUpdate]
})
export class ProfileComponent {
  public sideNavState = false;

  constructor(public ls: LayoutService) {
    this.ls.sideNavState$.subscribe(res => {
      this.sideNavState = res;
    });
  }
}
