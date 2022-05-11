import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[assessmentHeader]'
})
export class HeaderDirective implements OnInit {
  @Input() headerHeight = '35';
  @Input() fixed: boolean;
  constructor(private renderer: Renderer2, public hostElement: ElementRef) { }

  ngOnInit() {
    if (this.fixed) {
      this.renderer.addClass(this.hostElement.nativeElement, 'fixed');
    }
    if (this.headerHeight) {
      this.renderer.addClass(this.hostElement.nativeElement, 'h-' + this.headerHeight);
    }
  }

}


