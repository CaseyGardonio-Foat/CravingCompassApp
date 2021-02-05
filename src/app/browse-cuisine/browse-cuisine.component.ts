import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';
import { CuisineService } from '../cuisine.service';
import { Cuisine } from '../cuisine.model';

@Component({
  selector: 'app-browse-cuisine',
  templateUrl: './browse-cuisine.component.html',
  styleUrls: ['./browse-cuisine.component.scss']
})
export class BrowseCuisineComponent implements OnInit {
  @Input() dishArray: Dish[];
  cuisines: Cuisine[] = []
  selectedContinentRegions: Cuisine[] = [];
  selectedRegionalCuisines: Cuisine[] = []

  constructor(private dishService: DishService, private cuisineService: CuisineService) { }

  ngOnInit(): void {
    this.cuisines = this.cuisineService.getAllCuisines(); 
    console.log(this.cuisines);
  }

  onContinentSelected(selectedContinent) {
    this.selectedContinentRegions = [];
    this.cuisineService.selectCuisines(selectedContinent); 
    this.selectedContinentRegions = this.cuisineService.selectedCuisines;
    console.log(this.selectedContinentRegions)
  }

  onRegionSelected(selectedRegion) {
    this.selectedRegionalCuisines = [];
    this.cuisineService.selectCuisines(selectedRegion); 
    this.selectedRegionalCuisines = this.cuisineService.selectedCuisines;
    console.log(this.selectedRegionalCuisines)
  }
 
  // onCuisineSelected(selectedCusine) {
  //   this.selectedRegionalCuisines = [];
  //   this.cuisineService.selectCuisines(selectedRegion); 
  //   this.selectedRegionalCuisines = this.cuisineService.selectedCuisines;
  //   console.log(this.selectedRegionalCuisines)
  // }


}
