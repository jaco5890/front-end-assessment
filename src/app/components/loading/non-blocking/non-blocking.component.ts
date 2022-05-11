import { Component, Input } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'non-blocking',
  templateUrl: './non-blocking.component.html',
  styleUrls: ['./non-blocking.component.scss']
})
export class NonBlockingComponent  {
  color = "#8860d0";
  @Input() mode: string;
  @Input() value: string;
  @Input() bufferValue: number;
  constructor(public loadingservice: LoadingService) { }
}
