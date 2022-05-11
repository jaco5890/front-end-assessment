import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Custom button for custom card component
 */
@Component({
  selector: 'card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent implements OnInit {
  /** Tooltip for button input */
  @Input() tooltip: string;
  /** Input for icon for button */
  @Input() icon: string;
  /** Buttonclicked event emitter */
  @Output() buttonClicked = new EventEmitter();

  /** The constructor */
  constructor() { }

  /** Initialization */
  ngOnInit() {
  }

  /** Function for on button clicked event */
  onButtonClicked() {
    this.buttonClicked.emit();
  }

}
