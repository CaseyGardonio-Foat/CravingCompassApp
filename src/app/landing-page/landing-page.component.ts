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
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  documenuKey: string;
  mapsKey: string;

  constructor(
    private searchService: SearchService, 
    private http: HttpClient, 
    private keysService: KeysService,
    private router: Router) { }

  ngOnInit(): void {
    this.documenuKey = this.keysService.getDocumenuKey();
    this.mapsKey = this.keysService.getMapsKey()
  }

  //sample https request code from google maps api
  // https://maps.googleapis.com/maps/api/service/output?parameters

  /*this code does not work--throws the following error:
  core.js:5980 ERROR TypeError: Cannot read property 'length' of undefined
    at http.js:105
    at Array.forEach (<anonymous>)
    at HttpHeaders.lazyInit (http.js:99)
    at HttpHeaders.init (http.js:203)
    at HttpHeaders.forEach (http.js:270)
    at Observable._subscribe (http.js:1589)
    at Observable._trySubscribe (Observable.js:42)
    at Observable.subscribe (Observable.js:28)
    at innerSubscribe (innerSubscribe.js:67)
    at MergeMapSubscriber._innerSub (mergeMap.js:57)*/

  onSubmitSearch(form: NgForm) {
    const searchLat = 40.688072;
    const searchLon = -73.997385;
    const searchDistance = form.value.distance;
    const searchDishName = form.value.dishName;

    this.searchService.getRestaurants(searchLat, searchLon, searchDistance, searchDishName)
    console.log("search submitted");
  }

  onSubmitForm(form: NgForm) {
    const searchLocation = this.searchForm.value.location
    let searchLat = '';
    let searchLng = '';

    return this.http
      .get(`http://www.mapquestapi.com/geocoding/v1/address?key=${this.mapsKey}&location=${searchLocation}`)
      .subscribe(coords => {
        console.log(coords);
      });
  }

  //this code works while in this component, but not when outsourced to the searchService (as above onSubmitSearch); check into using a Subject to subscribe in the relevant components (18-261 & 13-176)
  onGetRestaurants(form: NgForm) {
    const searchLocation = '';
    //this will be used to capture the location field, transmit it to google maps geocoding, and retrieve the searchLat and searchLon below
    const searchLat = 40.688072;
    const searchLon = -73.997385;
    const searchDistance = form.value.distance;
    const searchDishName = form.value.dishName;

    // this.searchService.getRestaurants(searchLat, searchLon, searchDistance, searchDishName);

    console.log(this.http
    .get(`https://api.documenu.com/v2/menuitems/search/geo?lat=${searchLat}&lon=${searchLon}&distance=${searchDistance}&search=${searchDishName}`, 
    {
      headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
    }) 
    .subscribe(restaurants => {
      console.log(restaurants);
      this.router.navigate(['/restaurant-results']);
    }));
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
    console.log(this.searchForm);
  }

}
