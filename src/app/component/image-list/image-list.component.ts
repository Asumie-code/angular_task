import { Component, OnInit } from '@angular/core';

import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit { 
    images: any
    page = 1
    constructor(public imageService: ImageService) {}

    ngOnInit() {
      this.imageService.getImages(this.page).subscribe((data) => {
        this.images = data
        
        
      })
    }





}
