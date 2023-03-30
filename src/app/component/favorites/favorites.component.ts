import { Component, OnInit  } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/images';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html', 
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favImages!: Image[]
    
   
    constructor(public imageService: ImageService) { }
    

    ngOnInit(): void {
        this.favImages = this.imageService.getFavs()
    }

    remove(id: string, index: number) {
      this.imageService.removeFromFav(id)
      this.favImages = [...this.favImages.slice(0, index), ...this.favImages.slice(index + 1)]
    }

}
