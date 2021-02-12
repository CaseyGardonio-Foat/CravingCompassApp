import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { KeysService } from '../keys.service';
import { SearchService } from '../search.service';
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

  coordsRetrieved: boolean = false;
  userLat: number;
  userLng: number;

  constructor(
    private searchService: SearchService, 
    private http: HttpClient, 
    // private keysService: KeysService,
    private router: Router) { }

  ngOnInit(): void {
    // this.documenuKey = this.keysService.getDocumenuKey();
    // this.mapsKey = this.keysService.getMapsKey()
  }

  /*this method gets and stores the coordinates for the user's location so they can be passed as queries using search or browse*/
  onSubmitLocationForm(locationForm) {
    console.log(this.locationForm);
    this.searchService.storeUserLocation(locationForm.value.location, locationForm.value.distance);
    this.searchService.getSearchCoordinates(this.mapsKey, locationForm.value.location);
    this.coordsRetrieved = true;
    // this.userLat = this.searchService.searchLat;
    // this.userLng = this.searchService.searchLng;
  }

  //this method searches for the dish entered into the form using the search.service getRestaurants() method; n.b. the getRestaurants() method redirects to the results page.
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

  // onSubmit() {
  //   console.log(this.locationForm);
  // }

}
