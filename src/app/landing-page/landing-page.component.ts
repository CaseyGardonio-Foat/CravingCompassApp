import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    console.log(this.http
    .get('https://api.documenu.com/v2/menuitems/search/geo?lat=40.688072&lon=-73.997385&distance=1&search=buffalo%20chicken', 
    {
      headers: new HttpHeaders({'X-API-KEY': this.documenuKey}),
    }) 
    .subscribe(restaurants => {
      console.log(restaurants);
    }));
  }
  
  onSubmit() {
    console.log(this.searchForm);
  }

}
