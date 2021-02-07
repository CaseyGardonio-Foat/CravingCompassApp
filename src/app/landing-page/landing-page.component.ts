import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeysService } from '../keys.service';
import { SearchService } from '../search.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('locationForm') locationForm: NgForm;
  @ViewChild('dishSearch') dishSearch: NgForm;
  documenuKey: string;
  mapsKey: string;

  userLat: number;
  userLng: number;

  constructor(
    private searchService: SearchService, 
    private http: HttpClient, 
    private keysService: KeysService,
    private router: Router) { }

  ngOnInit(): void {
    this.documenuKey = this.keysService.getDocumenuKey();
    this.mapsKey = this.keysService.getMapsKey()
  }

  // onSubmitSearch(form: NgForm) {
  //   const searchLat = 40.688072;
  //   const searchLon = -73.997385;
  //   const searchDistance = form.value.distance;
  //   const searchDishName = form.value.dishName;

  //   this.searchService.getRestaurants(searchLat, searchLon, searchDistance, searchDishName)
  //   console.log("search submitted");
  // }


  /*this method gets and stores the coordinates for the user's location so they can be passed as queries using search or browse*/
  onSubmitLocationForm(locationForm) {
    console.log(this.locationForm);
    this.searchService.storeUserLocation(locationForm.value.location, locationForm.value.distance);
    this.searchService.getSearchCoordinates(this.mapsKey, locationForm.value.location);
    // this.userLat = this.searchService.searchLat;
    // this.userLng = this.searchService.searchLng;
  }

  //this code works while in this component, but not when outsourced to the searchService (as above onSubmitSearch); check into using a Subject to subscribe in the relevant components (18-261 & 13-176)
  onSearchRestaurants(dishSearch) {
    //this will be used to capture the location field, transmit it to google maps geocoding, and retrieve the searchLat and searchLon below
    const searchLat = this.searchService.searchLat;
    const searchLng = this.searchService.searchLng;
    const searchDistance = this.locationForm.value.distance;
    const searchDish = dishSearch.value.dish;

    console.log(searchDish);

    this.searchService.getRestaurants(searchLat, searchLng, searchDistance, searchDish);
    // this.router.navigate(['/restaurant-results']);

    // console.log(this.http
    // .get(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLng}&distance=${searchDistance}&search=${searchDish}`, 
    // {
    //   headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
    // }) 
    // .subscribe(restaurants => {
    //   console.log(restaurants);
    //   this.router.navigate(['/restaurant-results']);
    // }));
  }

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

  onSubmit() {
    console.log(this.locationForm);
  }

}
