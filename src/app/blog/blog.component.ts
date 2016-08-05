import { Component } from '@angular/core';
import { ActivatedRoute, RouterConfig } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BlogService } from './blog.service';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav/sidenav';

@Component({
  selector: 'blog',
  providers: [
    BlogService
  ],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    ROUTER_DIRECTIVES
  ],
  styleUrls: [ './blog.style.css' ],
  templateUrl: './blog.template.html'
})
export class Blog {
  private blogRoutes = [];

  constructor(private blogService: BlogService) {
    this.blogRoutes = this.blogService.getBlogRoutes();
  }

  prepareRoute(route): string {
    return this.blogService.prepareRoute(route);
  }
}
