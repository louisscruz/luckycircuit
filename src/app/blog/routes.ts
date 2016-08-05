import { BlogIndex } from './index/index';
import { Intro } from './posts/intro';

// async components must be named routes for WebpackAsyncRoute
export const routes = [{
  path: '', component: BlogIndex
}, {
  path: 'intro', component: Intro
}];
