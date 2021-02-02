import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeysService } from './keys.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RestaurantDetail } from './restaurants/restaurant-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {
  searchResults = new Subject();

  mapsKey: string;
  documenuKey: string;

  constructor(private keysService: KeysService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.mapsKey = this.keysService.getMapsKey();
    this.documenuKey = this.keysService.getDocumenuKey();
  }

  // getSearchCoordinates() {
  //   return this.http
  //   .get(`https://maps.googleapis.com/maps/api/geocoding/json?parameters`,
  //   {
  //     headers: new HttpHeaders({: this.mapsKey})
  //   })
  //   .subscribe(response=> {
  //     console.log(response);
  //   });
  // }

/*will need to chain the http requests in the order that the information is required:
  -coordinates from GoogleMaps
  -restaurant info from Documenu
  -restaurant info from GoogleMaps
*/

//the following method for making a request from the Documenu API successfully submits from landing-page but not when outsourced to this service; see landing-page.component.ts for more info
  getRestaurants(searchLat, searchLon, searchDistance, searchDishName) {
  //this will be used to capture the location field, transmit it to google maps geocoding, and retrieve the searchLat and searchLon below
    return this.http
      .get(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLon}&distance=${searchDistance}&search=${searchDishName}`, 
        {
          headers: new HttpHeaders({'X-API-KEY': this.documenuKey
        })
      })
      .subscribe(restaurants => {
        console.log(restaurants);
        this.router.navigate(['/restaurant-results']);
      }
    );
  };
  
  // getRestaurants() {
  //   const searchLocation = '';

  //   const searchLat = 40.688072;
  //   const searchLon = -73.997385;
  //   const searchDistance = this.searchForm.value.distance;
  //   const searchDishName = this.searchForm.value.dishName;

    // console.log(this.http
    // .get(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLon}&distance=${searchDistance}&search=${searchDishName}`, 
    // {
    //   headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
    // }) 
    // .pipe(map(responseData => {
    //   const responseArray = [];
    //   const restaurantsArray = responseData[4];
      
    //   for(let key in responseData) {
    //     responseArray.push({...responseData[key], id: key});
    //   }
    //   for(let restaurantObject in responseArray[4]){
    //     restaurantsArray.push(restaurantObject);
    //   }
    //   console.log(restaurantsArray);
    // })) 
  //   .subscribe(restaurants => {
  //     console.log(restaurants);
  //     this.router.navigate(['/restaurant-results']);
  //   }));
  // }

  // extractRestaurantData(
  //   name: string,
  //   address: string,
  //   website: string,
  //   openingHours: string,
  //   ) {}
  //   const restaurant = new RestaurantDetail(name, address, website, openingHours);
  // }

}
