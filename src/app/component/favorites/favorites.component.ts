import { Component  } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html', 
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
 
    
   
    constructor(public imageService: ImageService) { }


}
