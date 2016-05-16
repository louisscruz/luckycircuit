import {Component, DynamicComponentLoader, Injector} from '@angular/core';
import {RouteConfig, RouteParams, RouterOutlet} from '@angular/router-deprecated';

import {LeftSidenavComponent} from './sidenav/left-sidenav';
import {RightSidenavComponent} from './sidenav/right-sidenav';
import {FooterComponent} from '../footer';

@Component({
  selector: 'algorithms',
  directives: [
    RouterOutlet,
    LeftSidenavComponent,
    RightSidenavComponent,
    FooterComponent
  ],
  styles: [require('./algorithms.css')],
  template: require('./algorithms.html')
})
@RouteConfig([
  { path: '/preface', name: 'Preface', loader: () => require('es6-promise!./chapters/preface')('AlgorithmsPrefaceComponent'), useAsDefault: true },
  { path: '/role', name: 'Role', loader: () => require('es6-promise!./chapters/foundations/role')('AlgorithmsRoleComponent') }
])
export class Algorithms {
  constructor() {
  }
}
