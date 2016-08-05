import { Injectable } from '@angular/core';

import { BlogRoutes } from './routes.data';

@Injectable()
export class BlogService {
  public blogRoutes = []

  constructor() {
    this.blogRoutes = BlogRoutes;
  }
  getBlogRoutes() {
    return this.blogRoutes;
  }

  prepareRoute(route): string {
    return './' + route;
  }

  prepareDate(date): string {
    let dateObject = new Date(date);
    return dateObject.toString();
  }
}
