var highlight = require('highlight.js');
import {Component, ContentChild, Input} from '@angular/core';

@Component({
  selector: 'codebox',
  styles: [require('./codebox.css')],
  template: require('./codebox.html')
})
export class CodeboxComponent {
  private selected: string = 'javascript';
  @ContentChild('javascriptBlock') javascriptBlock;
  @ContentChild('rubyBlock') rubyBlock;
  @Input()
  title: string;

  selectLang(lang: string): void {
    this.selected = lang;
  }
  ngAfterViewInit() {
    console.log(this.rubyBlock.nativeElement);
    console.log(highlight);
  }
}
