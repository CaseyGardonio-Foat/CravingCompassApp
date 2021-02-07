import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeysService } from './keys.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {Restaurant } from './restaurant.model';
import { RestaurantDetail } from './restaurants/restaurant-detail.model';

//GeocodeResponse interface copies JSON object returned from MapQuest Geocoding API:
//https://developer.mapquest.com/documentation/samples/geocoding/v1/address/
export interface GeocodeResponse {
  "info": {
    "statuscode": number,
    "copyright": {
      "text": string,
      "imageUrl": string,
      "imageAltText": string
    },
    "messages": []
  },
  "options": {
    "maxResults": number,
    "thumbMaps": boolean,
    "ignoreLatLngInput": boolean
  },
  "results": [
    {
      "providedLocation": {
        "location": string
      },
      "locations": [
        {
          "street": string,
          "adminArea6": string,
          "adminArea6Type": string,
          "adminArea5": string,
          "adminArea5Type": string,
          "adminArea4": string,
          "adminArea4Type": string,
          "adminArea3": string,
          "adminArea3Type": string,
          "adminArea1": string,
          "adminArea1Type": string,
          "postalCode": string,
          "geocodeQualityCode": string,
          "geocodeQuality": string,
          "dragPoint": boolean,
          "sideOfStreet": string,
          "linkId": string,
          "unknownInput": string,
          "type": string,
          "latLng": {
            "lat": number,
            "lng": number
          },
          "displayLatLng": {
            "lat": number,
            "lng": number
          }
        }
      ]
    }
  ]
}

//RestaurantResponse interface copies JSON object returned from Documenu Search Menu Items Geo API:
//https://documenu.com/docs#get_search_menu_items_geo
export interface RestaurantsResponse {
  "totalResults": number,
  "page": number,
  "total_pages": number,
  "more_pages": boolean,
  "data": [
    {
      "address": {
        "city": string,
        "state": string,
        "postal_code": string,
        "street": string,
        "formatted": string,
      },
      "cuisines": string[],
      "geo": {
        "lat": number,
        "lon": number,
      },
      "item_id": string,
      "menu_item_description": string,
      "menu_item_name": string,
      "menu_item_price": number,
      "menu_item_pricing": [
        {
          "price": number,
          "currency": string,
          "priceString": string,
        }
      ],
      "price_range": string,
      "restaurant_hours": string,
      "restaurant_id": number,
      "restaurant_name": string,
      "restaurant_phone": string,
      "subsection": string,
      "subsection_description": string,
      "menus": [],
    }
  ],
  "numResults": number
}

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {
  searchResults = new Subject();

  mapsKey: string = "FLvwrZnG54V5dtE8YR0kxPwT3sr0GFUC";
  documenuKey: string = "23bf5213c9650586e04996e21ead58f6";

  searchDish: string;
  searchLocation: string
  searchDistance: number;

  searchLat: number;
  searchLng: number;

  restaurantResponse: RestaurantsResponse;
  restaurantResults: [];

  constructor(private keysService: KeysService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    // this.mapsKey = this.keysService.getMapsKey();
    this.documenuKey = this.keysService.getDocumenuKey();
  }

  storeUserLocation(searchedLocation: string, searchedDistance: number) {
    this.searchLocation = searchedLocation;
    this.searchDistance = searchedDistance;

    this.getSearchCoordinates(this.mapsKey, searchedLocation);
  }

  /*Get coordinates for user's location from MapQuest GeoCoding API: */
  getSearchCoordinates(mapsKey: string, location: string) {
    mapsKey = this.mapsKey;
    location = this.searchLocation;
    return this.http
    .get<GeocodeResponse>(`http://www.mapquestapi.com/geocoding/v1/address?key=${mapsKey}&location=${location}`)
    .subscribe(response=> {
      // console.log(response);
      this.searchLat = response.results[0].locations[0].latLng.lat;
      this.searchLng = response.results[0].locations[0].latLng.lng;
      console.log(this.searchLocation, this.searchLat, this.searchLng);
    })
  }

//the following method for making a request from the Documenu API successfully submits from landing-page but not when outsourced to this service; see landing-page.component.ts for more info
  getRestaurants(searchLat: number, searchLng: number, searchDistance:number, searchDish: string) {
    searchLat = this.searchLat;
    searchLng = this.searchLng;
    searchDistance = this.searchDistance;
    // searchDish = this.searchDish;

    return this.http
      .get<RestaurantsResponse>(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLng}&distance=${searchDistance}&search=${searchDish}`, 
        {
          headers: new HttpHeaders({'X-API-KEY': this.documenuKey
        })
      })
      .subscribe(restaurants => {
        //API returns JSON object of type RestaurantResults; 
        //in this is a property, data, that holds an array of restaurant results
        //iterate through this array and push each object into a new array, restaurantResults[]
        // console.log(restaurantResponse);
        this.restaurantResponse = restaurants;
        console.log(this.restaurantResponse.data[0]);
        // for(let result of this.restaurantResponse.data) {
        //   console.log(result);
        // }
        // this.restaurantResults = restaurantResponse;

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
