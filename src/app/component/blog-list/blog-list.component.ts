import { Component, OnInit } from '@angular/core';

import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
    blogs: any 

    constructor(public blogService: BlogService) {}

    ngOnInit() {
      this.blogService.getBlogs().subscribe((data) => {
        this.blogs = data 
        
      })
    }



}
