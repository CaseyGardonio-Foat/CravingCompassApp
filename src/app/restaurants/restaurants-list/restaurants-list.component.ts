import { Component, OnInit } from '@angular/core';
import { RestaurantDetail } from '../restaurant-detail.model';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  restaurantsList: RestaurantDetail[]

  constructor() { }

  ngOnInit(): void {
  }

}
