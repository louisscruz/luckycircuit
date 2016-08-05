import {Component, ContentChild, Input} from '@angular/core';

import { HighlightCode } from '../../directives/highlight/highlight.directive';

@Component({
  selector: 'codebox',
  directives: [
    HighlightCode
  ],
  styles: [require('./codebox.style.css')],
  template: require('./codebox.template.html')
})
export class Codebox {
  private selected: string = 'javascript';
  @ContentChild('javascriptBlock') javascriptBlock;
  @ContentChild('rubyBlock') rubyBlock;
  @Input()
  title: string;

  selectLang(lang: string): void {
    this.selected = lang;
  }
}
