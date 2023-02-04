import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blogId: number = 0 
  blog!: Blog
  constructor (
    private route: ActivatedRoute, 
    public blogService: BlogService
    ) { }

  ngOnInit(): void {
      const routeParams =  this.route.snapshot.paramMap
       this.blogId = Number(routeParams.get('blogId'))
       this.blogService.getBlog(this.blogId).subscribe((data) => {
        this.blog = data 
        
      })
      

  }

}
