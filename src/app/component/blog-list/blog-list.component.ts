import { Component } from '@angular/core';

import { blogs } from 'src/app/blogs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
    blogs = blogs

    upVote() {

    }


    downVote() {
      
    }
}
