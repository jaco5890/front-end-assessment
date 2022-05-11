import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout.component';
import { LayoutDirective } from './layout.directive';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from './header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutService } from './layout.service';
import { RouterModule } from '@angular/router';
import { SidenavDirective } from './sidenav/sidenav.directive';
import { ProfileComponent } from './sidenav/profile/profile.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LayoutDirective,
    SidenavComponent,
    SidenavDirective,
    ProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HeaderModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatProgressBarModule,
  ],
  providers: [LayoutService],
  exports: [
    LayoutComponent,
    LayoutDirective,
    SidenavComponent,
  ]
})
export class LayoutModule { }
