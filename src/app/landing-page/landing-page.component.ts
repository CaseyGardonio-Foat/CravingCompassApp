import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  defaultDistance: number = 5;
  // defaultTime: string = 'Now';
  userSearch = {
    dishName: '',
    location: '',
    distance: '',
    time: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userSearch.dishName = this.searchForm.value.dishName;
    this.userSearch.location = this.searchForm.value.location;
    this.userSearch.distance = this.searchForm.value.distance;
    this.userSearch.time = this.searchForm.value.time;
    //n.b. this value is coming in as undefined--check API to find which datatype to submit for this
    console.log(this.userSearch);
    this.searchForm.reset();


  }

}
