import { Component  } from '@angular/core';
import {  FormControl } from '@angular/forms'
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html', 
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
    author = new FormControl<string>('')
    title = new FormControl<string>('')
    content = new FormControl<string>('')
    
   
    constructor(public imageService: ImageService) { }


}
