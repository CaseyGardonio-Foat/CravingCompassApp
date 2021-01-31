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


//the following method for making a request from the Documenu API successfully submits from landing-page but not when outsourced to this service; see landing-page.component.ts for more info
  getRestaurants(searchLat, searchLon, searchDistance, searchDishName) {
    return (this.http
    .get(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLon}&distance=${searchDistance}&search=${searchDishName}`, 
    {
      headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
    }));
  }
}
