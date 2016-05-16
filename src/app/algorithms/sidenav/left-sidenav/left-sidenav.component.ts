import {Component} from '@angular/core';

import {RouterActive} from '../../../router-active';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'left-sidenav',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  directives: [RouterActive],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./left-sidenav.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./left-sidenav.html')
})
export class LeftSidenavComponent {
  private title: String = 'Introduction to Algorithms';
  private links: Array<Object>;

  constructor() {
    this.links = [{
      'text': 'Preface',
      'route': 'Preface'
    }, {
      'text': 'I. Foundations',
      'sublinks': [{
        'text': 'The Role of Algorithms',
        'route': 'Role'
      }, {
        'text': 'Growth of Functions'
      }, {
        'text': 'Divide and Conquer'
      }]
    }, {
      'text': 'II. Sorting and Order Statistics'
    }, {
      'text': 'III. Data Structures'
    }, {
      'text': 'IV. Advanced Design and Analysis Techniques'
    }, {
      'text': 'V. Advanced Data Structures'
    }, {
      'text': 'VI. Graph Algorithms'
    }, {
      'text': 'VII. Selected Topics'
    }, {
      'text': 'Appendix: Mathematical Background'
    }]
  }

}
