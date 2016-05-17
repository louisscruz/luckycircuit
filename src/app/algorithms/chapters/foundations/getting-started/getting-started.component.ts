import {Component} from '@angular/core';
import {CodeboxComponent} from '../../../../components/codebox';
import {MathJaxDirective} from '../../../../directives/mathjax.directive';

@Component({
  selector: 'getting-started',
  directives: [CodeboxComponent, MathJaxDirective],
  styles: [require('../../chapters.css')],
  template: require('./getting-started.html')
})
export class AlgorithmsGettingStartedComponent {
  private equation: any;
  constructor() {

  }

}
