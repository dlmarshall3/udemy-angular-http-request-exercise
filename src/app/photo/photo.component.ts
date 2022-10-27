import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  imageUrl: string = '';

  constructor(private photosService: PhotosService) { }

  public generateImage() {
    this.photosService.getRandomPhoto().subscribe((response) => {
      this.imageUrl = response.urls.regular;
    })
  }

  ngOnInit(): void {
  }

}
