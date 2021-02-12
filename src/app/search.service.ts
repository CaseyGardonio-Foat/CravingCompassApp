import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { KeysService } from './keys.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {Restaurant } from './restaurant.model';
import { RestaurantDetail } from './restaurants/restaurant-detail.model';
import { CuisineService } from './cuisine.service';

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

//RestaurantResponseBrowse interface copies JSON object returned from Documenu Restaurants Geo with Cuisine Filter API:
//https://documenu.com/docs#cuisine_filters
export interface RestaurantsResponseBrowse {
  "totalResults": number,
  "page": number,
  "total_pages": number,
  "more_pages": boolean,
  "data": [
    { 
      "restaurant_name": string,
      "restaurant_phone": string,
      "restaurant_website": string,
      "hours": string,
      "price_range": string,
      "restaurant_id": number,
      "cuisines": string[],
      "address": {
        "city": string,
        "state": string,
        "postal_code": string,
        "street": string,
        "formatted": string
      },
      "geo":{
        "lat": number,
        "lon": number,
      },
      "menus": string[],
      "last_updated": string,
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

  selectedCuisine: string;
  searchDish: string;
  searchLocation: string
  searchDistance: number;

  searchLat: number;
  searchLng: number;

  restaurantResponse: RestaurantsResponse;
  restaurantResults: any[];

  constructor(
    // private keysService: KeysService, 
    private http: HttpClient, 
    private router: Router,
    private cuisineService: CuisineService) { }

  ngOnInit() {
    // this.mapsKey = this.keysService.getMapsKey();
    // this.documenuKey = this.keysService.getDocumenuKey();
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

  /*search for restaurants by user-input dish*/
  getRestaurants(searchLat: number, searchLng: number, searchDistance:number, searchDish: string) {
    //parameters for search, in addition to searchDish, which gets passed to method directly from the component that calls it
    searchLat = this.searchLat;
    searchLng = this.searchLng;
    searchDistance = this.searchDistance;

    //retrieves searched dish name so restaurants-list can display on results list
    this.searchDish = searchDish;

    return this.http
      .get<RestaurantsResponse>(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLng}&distance=${searchDistance}&search=${searchDish}`, 
        {
          headers: new HttpHeaders({'X-API-KEY': this.documenuKey
        })
      })
      .subscribe(restaurants => {
        //API returns JSON object of type RestaurantResults, which contains restaurant info in the "data" array
        this.restaurantResponse = restaurants;
        this.restaurantResults = this.restaurantResponse.data;
       
        console.log(this.restaurantResults);
        this.router.navigate(['/restaurant-results']);
      }
    );
  };

  /*search for restaurants by user-input location and browse-cusine or browse-type*/
  getRestaurantsBrowse(searchLat: number, searchLng: number, searchDistance:number, selectedCuisine: string) {
    //parameters for search, in addition to selectedCuisine, which gets passed to method directly from the component that calls it?
    searchLat = this.searchLat;
    searchLng = this.searchLng;
    searchDistance = this.searchDistance;

    //retrieves searched dish name so restaurants-list can display on results list
    this.selectedCuisine = selectedCuisine;

    return this.http
      .get<RestaurantsResponse>(`https://api.documenu.com/v2/restaurants/search/geo?lat=${searchLat}&lon=${searchLng}&distance=${searchDistance}&cuisine=${this.selectedCuisine}`, 
        {
          headers: new HttpHeaders({'X-API-KEY': this.documenuKey
        })
      })
      .subscribe(restaurants => {
        //API returns JSON object of type RestaurantResults, which contains restaurant info in the "data" array
        this.restaurantResponse = restaurants;
        this.restaurantResults = this.restaurantResponse.data;
       
        console.log(this.restaurantResults);
        this.router.navigate(['/restaurant-results']);
      }
    );
  };

  /*sends current restaurantResults array to restaurant-list component*/
  getRestaurantResults() {
    return this.restaurantResults;
  };
}
