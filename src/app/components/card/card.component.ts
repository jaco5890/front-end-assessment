import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() name: string;
  @Output() buttonClicked = new EventEmitter();
  @Input() hasButton = false;
  @Input() buttonIcon: string;
  tooltip = "Search for user";
  
  onButtonClicked(e) {
    this.buttonClicked.emit(e);
  }

}
