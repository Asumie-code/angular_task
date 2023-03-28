import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog, Image } from '../images';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    apiUrl = 'https://picsum.photos/'
  constructor(private http: HttpClient, private router: Router) { }


  getImages(page: number, limit: number = 9) {
      return this.http.get<Image>(`${this.apiUrl}/v2/list?page=${page}&limit=${limit}`)
  }


  getImage(id: number) { 
    return  this.http.get<Image>(`${this.apiUrl}/id/${id}/info`)
  }





  getThumbnail(size: number, id: number) {
    return `https://picsum.photos/id/${id}/${size}/${size}` 
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
