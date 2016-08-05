import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { Home } from './home';

import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

export const routes: RouterConfig = [{
    path: '',
    component: Home
  }, {
    path: 'home',
    component: Home
  },
  // make sure you match the component type string to the require in asyncRoutes
  { path: 'about', component: 'About',
    resolve: {
      'yourData': DataResolver
    }
  }, {
    path: 'blog',
    component: 'Blog',
    children: [{
      path: '',
      component: 'BlogIndex'
    }, {
      path: 'intro',
      component: 'Intro'
    }]
  }, {
    path: '**',
    component: NoContent
  },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = {
  // we have to use the alternative syntax for es6-promise-loader to grab the routes
  'Blog': require('es6-promise-loader!./blog'),
  'BlogIndex': require('es6-promise-loader!./blog/index/index'),
  'Intro': require('es6-promise-loader!./blog/posts/intro'),
  'About': require('es6-promise-loader!./about'),
};


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About']
   // es6-promise-loader returns a function
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
