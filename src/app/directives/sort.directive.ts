import { Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

const upIcon = 'arrow_upward';
const downIcon = 'arrow_downward';

@Directive({
  selector: '[sort]'
})
export class SortDirective {

  @Input() name: string;
  @Output() onSort = new EventEmitter();

  @HostListener('click') onClick() {
    this.toggleDirection();
    this.sendSort();
  }

  toggleDirection() {
    const mdIconElement = this.el.nativeElement.querySelector('md-icon');
    const direction = mdIconElement.innerHTML;
    this.resetSorts();
    switch (direction) {
      case 'arrow_upward': this.renderer.setProperty(mdIconElement, 'innerHTML', downIcon); break;
      case 'arrow_downward': this.renderer.setProperty(mdIconElement, 'innerHTML', upIcon); break;
      default: this.renderer.setProperty(mdIconElement, 'innerHTML', upIcon); break;
    }
  }

  resetSorts() {
    const tr = this.el.nativeElement.parentElement.parentElement;
    const ths = tr.querySelectorAll('th');
    for (let th of ths) {
      const icon = th.querySelector('md-icon');
      this.renderer.setProperty(icon, 'innerHTML', '');
    }
  }

  sendSort() {
    const direction = this.el.nativeElement.querySelector('md-icon').innerHTML;
    switch (direction) {
      case 'arrow_upward': this.onSort.emit({ name: name, direction: 'asc' }); break;
      case 'arrow_downward': this.onSort.emit({ name: name, direction: 'dsc' }); break;
      default: break;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }


}
