import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../blogs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
    apiUrl = 'https://my.api.mockaroo.com/'
  constructor(private http: HttpClient, private router: Router) { }


  getBlogs() {
      return this.http.get<Blog>(`${this.apiUrl}blog.json`, {
        headers: {
          "X-API-Key": "803a3430"
        }
      })
  }


  getBlog(id: number) { 
    return  this.http.get<Blog>(`${this.apiUrl}/blog/${id}.json`,{
      headers: {
        "X-API-Key": "803a3430"

      }
    })
  }
   // the normal behavior is to implement a post request to update the votes and post blogs. 
   // console.log just for demo 
  upVote(blogId: number) {
    
    console.log(`blog ${blogId} has been upvoted`)
  }

  downVote(blogId: number) { 
    console.log(`blog ${blogId} has been downvoted`)
    
  }

  addBlogPost(title: string | null, content: string | null, author: string | null ) {
    if(title  && content && author) {
        const blog = {
          title, 
          content, 
          author, 
        }

        console.log('added', blog)
        this.router.navigate(['/'])
      } else {
        alert('please fill in fields')
      }
  }
}
