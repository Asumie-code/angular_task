import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/images';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  imageId: number = 0 
  image!: Image
  constructor (
    private route: ActivatedRoute, 
    public imageService: ImageService
    ) { }

  ngOnInit(): void {
      const routeParams =  this.route.snapshot.paramMap
       this.imageId = Number(routeParams.get('imageId'))
       this.imageService.getImage(this.imageId).subscribe((data) => {
        this.image = data 
        
      })
      

  }

}
