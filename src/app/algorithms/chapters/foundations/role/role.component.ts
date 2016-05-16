import {Component} from '@angular/core';
import {CodeboxComponent} from '../../../../components/codebox';
import {MathJaxDirective} from '../../../../directives/mathjax.directive';

@Component({
  selector: 'intro',
  directives: [CodeboxComponent, MathJaxDirective],
  styles: [require('../../chapters.css')],
  template: require('./role.html')
})
export class AlgorithmsRoleComponent {
  private equation: any;
  constructor() {

  }

}
