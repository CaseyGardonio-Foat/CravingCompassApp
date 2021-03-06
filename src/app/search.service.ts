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

  //there is no need to declare these properties here, because the keys only get retrieved from the keysService inside of the methods that require them
  // mapsKey: string = '';
  // documenuKey: string = '';

  selectedCuisine: string;
  searchDish: string;
  searchLocation: string
  searchDistance: number;

  searchLat: number;
  searchLng: number;

  restaurantResponse: RestaurantsResponse;
  restaurantResults: any[];

  constructor(
    private http: HttpClient, 
    private router: Router,
    private keysService: KeysService) { }

  ngOnInit() {
    console.log('ngOnInit fired');
    // console.log(this.keysService.getMapQuestKey());
    // this.mapsKey = this.keysService.getMapQuestKey();
    // console.log(this.mapsKey);
    // this.documenuKey = this.keysService.getDocumenuKey();
  }

  storeUserLocation(searchedLocation: string, searchedDistance: number) {
    this.searchLocation = searchedLocation;
    this.searchDistance = searchedDistance;
    const mapsKey = this.keysService.getMapQuestKey();

    this.getSearchCoordinates(mapsKey, searchedLocation);
  }

  /*Get coordinates for user's location from MapQuest GeoCoding API: */
  getSearchCoordinates(mapsKey: string, location: string) {
    //calling keysService.getMapQuestKey() in ngOnInit does not work, for some reason; keysService must be called within the method that requires the key
    mapsKey = this.keysService.getMapQuestKey();
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
    this.selectedCuisine = '';
    const documenuKey = this.keysService.getDocumenuKey();

    //retrieves searched dish name so restaurants-list can display on results list
    this.searchDish = searchDish;
    
    return this.http
      .get<RestaurantsResponse>(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLng}&distance=${searchDistance}&search=${searchDish}`, 
        {
          headers: new HttpHeaders({'X-API-KEY': documenuKey,
        })
      })
      .subscribe(restaurants => {
        //API returns JSON object of type RestaurantResults, which contains restaurant info in the "data" array
        this.restaurantResponse = restaurants;
        this.restaurantResults = this.restaurantResponse.data;

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
    this.searchDish = '';
    const documenuKey = this.keysService.getDocumenuKey();

    //retrieves searched dish name so restaurants-list can display on results list
    this.selectedCuisine = selectedCuisine;

    return this.http
      .get<RestaurantsResponse>(`https://api.documenu.com/v2/restaurants/search/geo?lat=${searchLat}&lon=${searchLng}&distance=${searchDistance}&cuisine=${this.selectedCuisine}`, 
        {
          headers: new HttpHeaders({'X-API-KEY': documenuKey
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
