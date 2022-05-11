import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'coms',
  templateUrl: './coms.component.html',
  styleUrls: ['./coms.component.scss']
})
export class ComsComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBar: MatSnackBar
  ) { }

  close() {
    this.snackBar.dismiss();
  }

}
