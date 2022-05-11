import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion'

import { CardButtonComponent } from './card-button/card-button.component';

@NgModule({
  declarations: [InfoCardComponent, CardButtonComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    InfoCardComponent,
    CardButtonComponent
  ]
})
export class InfoCardModule { }
