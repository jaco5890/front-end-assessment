import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComsComponent } from './coms.component';

@Injectable({
  providedIn: 'root'
})
export class ComsService {
  constructor(private snackBar: MatSnackBar) { }

  showMsg(msg, t?) {
    let color = 'red';
    switch (t) {
      case 'success':
        color = 'green';
        break;
      case 'warning':
        color = 'orange';
        break;
      case 'error':
        color = '#fff';
        break;
      case 'info':
        color = 'blue';
        break;

    }
    this.snackBar.openFromComponent(ComsComponent, {
      duration: 8000,
      data: {
        msg
      },
      panelClass: ['red', 'message-box'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
