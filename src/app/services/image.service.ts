import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../images';

import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl = 'https://picsum.photos/';
  constructor(private http: HttpClient, private router: Router, private storage: StorageService ) {}

  getImages(page: number, limit: number = 9) {
    return this.http.get<Image[]>(
      `${this.apiUrl}/v2/list?page=${page}&limit=${limit}`
    );
  }

  getImage(id: number) {
    return this.http.get<Image>(`${this.apiUrl}/id/${id}/info`);
  }

  getThumbnail(size: number, id: string) {
    return `https://picsum.photos/id/${id}/${size}/${size}`;
  }

  addToFav(image: Image) {
    const data = JSON.stringify(image)
    this.storage.set(image.id, data)
    alert('added to favorites')
  }

  removeFromFav(id: string)  {
    this.storage.remove(id)
    alert('remove from favorites')
  }

  getFavs() {
     let images: Image[] = []
     for(let value of this.storage.getAll()) {
        images.push(JSON.parse(value))
     }
      return images
  }

}
