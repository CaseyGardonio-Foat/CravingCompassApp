import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeysService } from '../keys.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  documenuKey: string;

  constructor(
    private searchService: SearchService, 
    private http: HttpClient, 
    private keysService: KeysService) { }

  ngOnInit(): void {
    this.documenuKey = this.keysService.getDocumenuKey();
  }

  onSubmitSearch() {
    this.searchService.getRestaurants();
  }

  getRestaurants() {
    // let searchParams = new HttpParams().set('40.68919','-73.992378', '1', '1');
    console.log(this.http
    .get(`https://api.documenu.com/v2/menuitems/search/geo?lat=40.688072&lon=-73.997385&distance=${this.searchForm.value.distance}&search=${this.searchForm.value.dishName}`, 
    {
      headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
      // params: searchParams
    }) 
    .subscribe(restaurants => {
      console.log(restaurants);
    }));
  }
  
  onSubmit() {
    console.log(this.searchForm);
  }

}
