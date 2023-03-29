import { Component, OnInit, HostListener } from '@angular/core';
import { Image } from 'src/app/images';

import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit { 
    images: any
    page = 1
    filteredImage!: Image
    filter = false
    filterValue = ''
  

    @HostListener("window:scroll", [])
    onScroll(): void {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        this.page++
        this.imageService.getImages(this.page).subscribe((data) => {
          this.images = [...this.images, ...data]
          
        })
      }


    }

    
    constructor(public imageService: ImageService) {}

    ngOnInit() {
      this.imageService.getImages(this.page).subscribe((data) => {
        this.images = data
        
      })

      
    }
    
    
    filterImages() {
        this.filteredImage = this.images.filter((image: Image) => {
          return image.id === this.filterValue || image.author.toLowerCase() === this.filterValue.toLowerCase()
        })[0]


        if(this.filteredImage) {
          this.filter = true
        } else {
          this.filter = false
        }
 
      
      
    }
   
  

}
