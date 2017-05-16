import { Directive, Input, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

const upIcon = 'arrow_upward';
const downIcon = 'arrow_downward';

@Directive({
  selector: '[sort]'
})
export class SortDirective {

  @Input() sortArray: Array<any[]>;

  @HostListener('click') onClick() {
    this.resetSorts(this.el);
    this.toggleDirection(this.el);
  }

  resetSorts(element: ElementRef){
    
  }

  toggleDirection(element: ElementRef) {
    const mdIconElement = element.nativeElement.querySelector('md-icon');
    const html = mdIconElement.innerHTML;
    switch (html) {
      case 'arrow_upward': this.renderer.setProperty(mdIconElement, 'innerHTML', downIcon); break;
      case 'arrow_downward': this.renderer.setProperty(mdIconElement, 'innerHTML', upIcon); break;
      default: this.renderer.setProperty(mdIconElement, 'innerHTML', upIcon); break;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }


}
