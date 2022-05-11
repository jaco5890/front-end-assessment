import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';
/**
 * This directive is used for styling the layout component 
 */
@Directive({
  selector: '[assessmentLayout]'
})
export class LayoutDirective implements OnInit {
  @Input() headerHeight: string = '40';
  @Input() fixed: string;

  constructor(private renderer: Renderer2, public hostElement: ElementRef) { }

  ngOnInit() {
    if (this.headerHeight && this.fixed === 'true') {
      this.renderer.addClass(this.hostElement.nativeElement, 'pt-' + this.headerHeight);
    } else {

      this.renderer.removeClass(this.hostElement.nativeElement, 'pt-' + this.headerHeight);
    }
  }

}
