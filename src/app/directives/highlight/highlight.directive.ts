import { Directive, ElementRef } from '@angular/core';

var hljs = require('highlight.js');;

@Directive({
  selector: 'pre'
})
export class HighlightCode {
  constructor(private eltRef: ElementRef) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.eltRef.nativeElement);
  }
}
