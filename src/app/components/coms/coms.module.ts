import { NgModule } from '@angular/core';
import { ComsComponent } from './coms.component';
import { MaterialModule } from '../../core/material/material.module';
import { BaseModule } from '../../core/base/base.module';
import { ComsService } from './coms.service';



@NgModule({
  declarations: [ComsComponent],
  imports: [
    BaseModule,
    MaterialModule
  ],
  providers: [
    ComsService
  ],
  entryComponents: [
    ComsComponent
  ]
})
export class ComsModule { }
