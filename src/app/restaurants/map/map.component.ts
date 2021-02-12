import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { KeysService } from 'src/app/keys.service';
import { SearchService } from 'src/app/search.service';
// import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  documenuKey: string;
  mapsKey: string;
  lat: number;
  lng: number;
  map: any;
  restaurantsList: any[];
  restaurantAddressesString: string;

  constructor(
    private http: HttpClient,
    // private keysService: KeysService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    // this.documenuKey = this.keysService.getDocumenuKey();
    // this.mapsKey = this.keysService.getMapsKey();
    this.mapsKey = "FLvwrZnG54V5dtE8YR0kxPwT3sr0GFUC";  
    this.lat = this.searchService.searchLat;
    this.lng = this.searchService.searchLng;
    this.restaurantsList = this.searchService.getRestaurantResults();
    this.formatRestaurantAddresses();
    console.log(this.restaurantAddressesString);
  };

  formatRestaurantAddresses() {
    let restaurantAddressesString = '';
    for(let restaurant of this.restaurantsList){
      restaurantAddressesString += `||${restaurant.geo.lat},${restaurant.geo.lon}`
    }
    this.restaurantAddressesString = restaurantAddressesString;
  };

  /*calling the MapQuest api directly from the html template works better than making the call from a method here*/
  // getMap() {
  //   let mapsKey = this.mapsKey;
  //   let lat = this.lat;
  //   let lng = this.lng;
  //   return this.http
  //   .get(`https://www.mapquestapi.com/staticmap/v5/map?key=${mapsKey}&locations=${lat},${lng}|circle-sm-f05423&zoom=14&size=350,225@2x`)
  //   .subscribe(mapResult=> {
  //     this.map = mapResult;
  //     console.log('map request sent');
  //   })
  // }

}
