/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { Navbar } from './navbar';
import { Footer } from './footer';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [
    Navbar,
    Footer,
  ],
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <md-content>
      <navbar></navbar>
      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <main>
        <router-outlet></router-outlet>
      </main>

      <!--pre class="app-state">this.appState.state = {{ appState.state | json }}</pre-->

      <footer></footer>
    </md-content>
  `
})
export class App {
  private loading = false;
  name = 'Lucky Circuit';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }
}
