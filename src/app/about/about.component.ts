import {Component} from '@angular/core';
import {FooterComponent} from '../footer';

@Component({
  selector: 'about',
  directives: [FooterComponent],
  styles: [require('./about.css')],
  template: require('./about.html')
})
export class About {


}
