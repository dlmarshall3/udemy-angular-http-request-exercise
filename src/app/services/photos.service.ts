import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface iUnsplash {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  BASE_URL: string = "https://api.unsplash.com";

  constructor(private http: HttpClient) { }
  
  getRandomPhoto() {
    return this.http.get<iUnsplash>(`${this.BASE_URL}/photos/random`, {
      headers: {
        Authorization: 'Client-ID ELinww0Pu8X8nWIGq_oOw-vz2Q88VteTt_P8w90PKhw'
      }
    });
  }
}
