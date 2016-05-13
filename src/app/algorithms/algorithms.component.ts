import {Component, DynamicComponentLoader, Injector} from '@angular/core';
import {RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';

@Component({
  selector: 'about',
  directives: [RouterOutlet],
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
  `],
  template: require('./algorithms.html')
})
@RouteConfig([
  { path: '/intro', name: 'Intro', loader: () => require('es6-promise!./chapters/intro')('AlgorithmsIntroComponent'), useAsDefault: true }
])
export class Algorithms {
  constructor() {
  }
}
