import { Component, OnInit } from '@angular/core';
import { RestaurantDetail } from '../restaurant-detail.model';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  selectedRestaurantDetail: RestaurantDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
