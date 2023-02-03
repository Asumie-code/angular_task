import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogs } from 'src/app/blogs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog = blogs[0]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      const routeParams =  this.route.snapshot.paramMap
      const blogId = Number(routeParams.get('blogId'))
      

  }

  upVote() {

  }

  downVote() {
    
  }
}
