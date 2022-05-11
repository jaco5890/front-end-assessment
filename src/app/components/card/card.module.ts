import { NgModule } from '@angular/core';
import { BaseModule } from '../../core/base/base.module';
import { MaterialModule } from '../../core/material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    BaseModule,
    MaterialModule,
    MatIconModule
  ],
  exports:[
    CardComponent
  ]
})
export class CardModule { }
