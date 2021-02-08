import { Component, OnInit } from '@angular/core';
import { RestaurantDetail } from '../restaurant-detail.model';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  restaurantsList: any[];
  searchDish: string;
  selectedCuisine: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchDish = this.searchService.searchDish;
    this.selectedCuisine = this.searchService.selectedCuisine
    this.restaurantsList = this.searchService.getRestaurantResults();
  }

}
