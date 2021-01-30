import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeysService } from './keys.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {
  mapsKey: string;
  documenuKey: string;

  constructor(private keysService: KeysService, private http: HttpClient) { }

  ngOnInit() {
    this.mapsKey = this.keysService.getMapsKey();
    this.documenuKey = this.keysService.getDocumenuKey();
  }

  // getSearchCoordinates() {
  //   this.http.get().subscribe(latLong=> {
  //     console.log(latLong);
  //   });
  // }


//the following method for making a request from the Documenu API does not successfully submit
  getRestaurants() {
    console.log(this.http
    .get('https://api.documenu.com/v2/menuitems/search/geo?lat=40.688072&lon=-73.997385&distance=1&search=buffalo%20chicken', 
    {
      headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
    })
    .subscribe(restaurants => {
      console.log(restaurants);
    }));
  
  }

}
