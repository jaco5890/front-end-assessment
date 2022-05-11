import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'blocking',
  templateUrl: './blocking.component.html',
  styleUrls: ['./blocking.component.scss']
})
export class BlockingComponent implements OnInit {
  public mode = 'indeterminate';
  public color = '#8860d0';
  public message = 'loading';
  public value = 0;
  constructor(
    public dialogRef: MatDialogRef<BlockingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if (this.data) {
      if (this.data.message) {
        this.message = this.data.message;
      }
      if (this.data.color) {
        this.color = this.color;
      }
      if (this.data.mode) {
        this.mode = this.data.mode;
      }
    }
  }

}
