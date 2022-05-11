import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockingComponent } from './blocking/blocking.component';
import { NonBlockingComponent } from './non-blocking/non-blocking.component';
import { BaseModule } from '../../core/base/base.module';
import { MatProgressSpinnerModule, } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule, } from '@angular/material/dialog';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [BlockingComponent, NonBlockingComponent],
  imports: [
    CommonModule,
    BaseModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  exports: [
    BlockingComponent,
    NonBlockingComponent
  ],
  providers: [
    LoadingService
  ],
  entryComponents: [
    BlockingComponent
  ]
})
export class LoadingModule { }
