import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../images';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
    apiUrl = 'https://picsum.photos/'
  constructor(private http: HttpClient, private router: Router) { }


  getImages(page: number, limit: number = 9) {
      return this.http.get<Image[]>(`${this.apiUrl}/v2/list?page=${page}&limit=${limit}`)
  }


  getImage(id: number) { 
    return  this.http.get<Image>(`${this.apiUrl}/id/${id}/info`)
  }





  getThumbnail(size: number, id: string) {
    return `https://picsum.photos/id/${id}/${size}/${size}` 
  }

  
}
