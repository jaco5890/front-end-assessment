import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComsComponent } from './coms.component';

@Injectable({
  providedIn: 'root'
})
export class ComsService {
  constructor(private snackBar: MatSnackBar) { }

  showMsg(msg, t) {
    let color = 'blue-600-bg';
    switch (t) {
      case 'success':
        color = 'green-600-bg';
        break;
      case 'warning':
        color = 'orange-600-bg';
        break;
      case 'error':
        color = 'red-600-bg';
        break;
      case 'info':
        color = 'blue-600-bg';
        break;

    }
    this.snackBar.openFromComponent(ComsComponent, {
      duration: 8000,
      data: {
        msg
      },
      panelClass: [color, 'message-box'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  showNetworkMsg(hasNetwork) {
    let color = 'blue-600-bg';
    let time = 3000;
    let msg = '';
    switch (hasNetwork) {
      case true:
        color = 'green-600-bg';
        time = 3000;
        msg = ' Your internet has been restored 😀';
        break;
      case false:
        color = 'red-600-bg';
        time = 300000;
        msg = ' You do not have internet at the moment, please check your connection 😭';
        break;


    }
    this.snackBar.openFromComponent(ComsComponent, {
      duration: time,
      data: {
        msg
      },
      panelClass: [color, 'message-box'],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
