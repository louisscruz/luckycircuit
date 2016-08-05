import { Component } from '@angular/core';

import { BlogService } from '../blog.service';

@Component({
  selector: 'blog-index',
  providers: [
    BlogService
  ],
  styleUrls: [ './blog.index.style.css' ],
  templateUrl: './blog.index.template.html'
})
export class BlogIndex {
  private blogPosts = [];

  constructor(private blogService: BlogService) {
    this.blogPosts = this.blogService.blogRoutes;
  }

  prepareRoute(route): string {
    return this.blogService.prepareRoute(route);
  }

  prepareDate(date): string {
    return this.blogService.prepareDate(date);
  }
}
