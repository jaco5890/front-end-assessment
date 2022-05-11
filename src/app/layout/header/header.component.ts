import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'assessment-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() logo: string;
  @Input() fixed: boolean;
  @Input() buttonIcon: string;
  @Input() color: string;
  @Input() headerHeight: string;
  @Output() buttonClicked = new EventEmitter();

  constructor(
    public ls: LayoutService,
    public dialog: MatDialog ) { }

  ngOnInit() {
  }

  onButtonClicked(e) {
    this.buttonClicked.emit(e);
  }
}
