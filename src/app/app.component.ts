/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation, ViewChild} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {LeftSidenavComponent} from './left-sidenav';
import {RightSidenavComponent} from './right-sidenav';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive, RightSidenavComponent, LeftSidenavComponent ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `body{
    }
    .layout {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
    .layout-body {
      flex: 1;
      display: flex;
      height: 100%;
    }
    .sidenav-layout {
      flex: 1;
      flex-grow: 1;
    }
    .sidenav-content {
      height: 100%;
      flex-grow: 1;
    }
    button.active{
      background: #fff;
      color: #009688;
    }
    button.active:hover{
      color: #fff;
    }
    footer {
      height: 3em;
    }
    `
  ],
  template: `
    <header>
      <md-toolbar color="primary">
          <span>Lucky Circuit</span>
          <span class="fill"></span>
          <button md-button router-active [routerLink]=" ['Home'] ">
            Home
          </button>
          <button md-button router-active [routerLink]=" ['About'] ">
            About
          </button>
          <button md-button router-active [routerLink]=" ['Algorithms', 'Intro'] ">
            Content
          </button>
          <button md-fab class="md-accent">Menu</button>
      </md-toolbar>
    </header>
    <md-content class="layout-body">
      <md-sidenav-layout class="sidenav-layout">
        <md-sidenav #start mode="side">
          <left-sidenav></left-sidenav>
        </md-sidenav>

        <md-sidenav #end align="end">
          <right-sidenav></right-sidenav>
        </md-sidenav>

        <div class="sidenav-content">
        <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

        <router-outlet></router-outlet>

          <div>
            <header>Sidenav</header>
            <button md-button (click)="start.toggle()">Toggle Start Side Drawer</button>
            <button md-button (click)="end.toggle()">Toggle End Side Drawer</button>
          </div>

          <button md-button>HELLO</button>
          <button md-raised-button class="md-primary">HELLO</button>
          <button md-fab class="md-accent">HI</button>
        </div>
      </md-sidenav-layout>

      </md-content>
      <footer>
        test
      </footer>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
  //{ path: '/algorithms', name: 'Algorithms', loader: () => require('es6-promise!./algorithms/chapters/intro')('Algorithms')},
  { path: '/algorithms/...', name: 'Algorithms', loader: () => require('es6-promise!./algorithms')('Algorithms')}
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
