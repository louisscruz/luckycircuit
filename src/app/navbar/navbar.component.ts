import {Component} from '@angular/core';

import {RouterActive} from '../router-active';

@Component({
  selector: 'navbar',
  directives: [RouterActive],
  styles: [require('./navbar.css')],
  template: require('./navbar.html')
})
export class NavbarComponent {
}
