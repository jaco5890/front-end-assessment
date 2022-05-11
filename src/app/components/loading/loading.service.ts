import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlockingComponent } from './blocking/blocking.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public barColor: string;
  public barMode: string;
  public barValue: number;
  public barBufferValue: number;
  public showNonBlockingLoader = false;
  public blockingLoader: any;
  constructor(public dialog: MatDialog) {
  }

  showLoaderBar(color: string, mode: string, value?: number, bufferValue?: number) {
    if (this.showNonBlockingLoader) {
      setTimeout(() => {
        this.showNonBlockingLoader = false;
      }, 50);
    }
    this.barColor = color;
    this.barMode = mode;
    if (value) {
      this.barValue = value;
    }
    if (bufferValue) {
      this.barBufferValue = bufferValue;
    }
    setTimeout(() => {
      this.showNonBlockingLoader = true;
    }, 200);
  }

  stopLoadingBar() {
    setTimeout(() => {
      this.showNonBlockingLoader = false;
    }, 200);
  }

  openBlockingLoader(message: string, color?: string, mode?: string, value?: number): void {
    this.blockingLoader = this.dialog.open(BlockingComponent, {
      width: '350px',
      panelClass: 'blocking-loader',
      data: {
        message,
        color,
        mode,
        value
      },
      disableClose: true
    });
  }
  closeBlockingLoader() {
    this.blockingLoader.close();
  }
}
