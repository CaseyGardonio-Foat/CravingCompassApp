import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';
import { CuisineService } from '../cuisine.service';
import { Cuisine } from '../cuisine.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-browse-cuisine',
  templateUrl: './browse-cuisine.component.html',
  styleUrls: ['./browse-cuisine.component.scss']
})
export class BrowseCuisineComponent implements OnInit {
  @Input() dishArray: Dish[];
  cuisines: Cuisine[] = []
  selectedContinentRegions: Cuisine[] = [];
  selectedRegionalCuisines: Cuisine[] = [];
  selectedSecondaryCuisines: Cuisine[] = [];

  constructor(
    private dishService: DishService, 
    private cuisineService: CuisineService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.cuisines = this.cuisineService.getAllCuisines(); 
    // console.log(this.cuisines);
  }

  onContinentSelected(selectedContinent) {
    this.selectedSecondaryCuisines = [];
    this.selectedContinentRegions = [];
    this.cuisineService.selectCuisines(selectedContinent); 
    this.selectedContinentRegions = this.cuisineService.selectedCuisines;
    console.log(this.selectedContinentRegions)
  }
  
  // onSelectCuisine(region: string) {
  //   const searchLat = this.searchService.searchLat;
  //   const searchLng = this.searchService.searchLng;
  //   const searchDistance = this.searchService.searchDistance;
  //   const selectedCuisine = region;

  //   console.log(selectedCuisine);
  //   this.searchService.getRestaurantsBrowse(searchLat, searchLng, searchDistance, selectedCuisine)
  // }

  onSelectCuisine(region: string) {
    const searchLat = this.searchService.searchLat;
    const searchLng = this.searchService.searchLng;
    const searchDistance = this.searchService.searchDistance;
    const selectedCuisine = region;
    this.selectedSecondaryCuisines = [];

    this.cuisineService.selectCuisines(region); 
      this.selectedSecondaryCuisines = this.cuisineService.selectedCuisines;

    if(this.selectedSecondaryCuisines.length > 0){
      console.log(this.selectedSecondaryCuisines)
    } else {
    console.log(selectedCuisine);
    this.searchService.getRestaurantsBrowse(searchLat, searchLng, searchDistance, selectedCuisine)
    }
  }
}
