import { Component } from '@angular/core';

import { BlogService } from '../blog.service';
import { OrderByPipe } from '../../pipes/order.pipe';

@Component({
  selector: 'blog-index',
  providers: [
    BlogService
  ],
  pipes: [
    OrderByPipe
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
