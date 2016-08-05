import { Component } from '@angular/core';

import { Codebox } from '../../../components/codebox';
import { HighlightCode } from '../../../directives/highlight/highlight.directive';
import { MathJaxDirective } from '../../../directives/mathjax/mathjax.directive';

@Component({
  selector: 'intro',
  directives: [
    Codebox,
    HighlightCode,
    MathJaxDirective
  ],
  styleUrls: [ '../posts.style.css' ],
  templateUrl: './intro.template.html'
})
export class Intro {

}
