import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    @Input(' MathJax')
    texExpression: string;

    constructor(private el: ElementRef) {
    }
    ngAfterViewInit() {
      console.log(this.texExpression);
    }

    ngOnChanges() {
       this.el.nativeElement.innerHTML = this.texExpression;
       MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.el.nativeElement]);
    }
}
