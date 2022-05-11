import {Component, OnInit, Input, HostListener, Output, EventEmitter, ElementRef, Directive, ViewChild} from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

/**
 * Custom card component
 */
@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})

export class InfoCardComponent implements OnInit {
  @Input() title: string;
  @Input() showButton: true;
  @Input() canHover: boolean;
  @Input() icon: string;
  @Output() buttonClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  
  onButtonClicked() {
    this.buttonClicked.emit();
  }


}
