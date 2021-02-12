import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../dish.model';
import { CuisineService } from '../cuisine.service';
import { Cuisine } from '../cuisine.model';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-browse-type',
  templateUrl: './browse-type.component.html',
  styleUrls: ['./browse-type.component.scss']
})
export class BrowseTypeComponent implements OnInit {
  @Input() dishArray: Dish[];
  cuisines: Cuisine[] = []
  selectedType: Cuisine[] = [];
  selectedRegionalCuisines: Cuisine[] = [];
  selectedSecondaryCuisines: Cuisine[] = [];
  
  constructor(
    private cuisineService: CuisineService,
    private searchService: SearchService) { }

  ngOnInit(): void {
    this.cuisines = this.cuisineService.getAllCuisines(); 
  }
  
  onTypeSelected(selectedType) {
    this.selectedSecondaryCuisines = [];
    this.selectedType = [];
    this.cuisineService.selectCuisines(selectedType); 
    this.selectedType = this.cuisineService.selectedCuisines;
    console.log(this.selectedType)
  }
 
  onSelectCuisine(type: string) {
    const searchLat = this.searchService.searchLat;
    const searchLng = this.searchService.searchLng;
    const searchDistance = this.searchService.searchDistance;
    const selectedCuisine = type;
    this.selectedSecondaryCuisines = [];

    this.cuisineService.selectCuisines(type); 
      this.selectedSecondaryCuisines = this.cuisineService.selectedCuisines;

    if(this.selectedSecondaryCuisines.length > 0){
      console.log(this.selectedSecondaryCuisines)
    } else {
    console.log(selectedCuisine);
    this.searchService.getRestaurantsBrowse(searchLat, searchLng, searchDistance, selectedCuisine)
    }
  }
}
  
