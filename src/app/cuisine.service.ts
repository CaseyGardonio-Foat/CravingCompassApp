import { Injectable } from '@angular/core';
import { Cuisine } from './cuisine.model';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  cuisines: Cuisine[] = [
    new Cuisine('Americas', '../assets/foodIcons/Regions/Americas.svg', 'continent', [], ['North America', 'Central America/Caribbean', 'South America']),
    new Cuisine('North America', '../assets/foodIcons/Regions/NorthAmerica.svg', 'region', ['Americas'], ['Canada', 'USA', 'Mexico']),
    new Cuisine('Canada', '../assets/foodIcons/Regions/Americas.svg', 'country', ['North America'], []),
    new Cuisine('USA', '../assets/foodIcons/Regions/Americas.svg', 'country', ['North America'], ['Southern', 'Barbeque', 'Hawaiian', 'Southwestern', 'Jewish', 'Puerto Rican']),
    new Cuisine('Mexico', '../assets/foodIcons/Regions/Americas.svg', 'country', ['North America'], []),
    new Cuisine('Central America/Caribbean', '../assets/foodIcons/Regions/CentralAmerica_Caribbean.svg', 'region', ['Americas'], ['Belize', 'Costa Rica', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Panama', 'Jamaica', 'Puerto Rico', 'Cuba']),
    new Cuisine('South America', '../assets/foodIcons/Regions/SouthAmerica.svg', 'region', ['Americas'], ['Argentina', 'Brazil', 'Peru', 'Venezuela']),
    new Cuisine('Europe', 'imagePath: string', 'continent', [], ['French', 'Spanish', 'Greek', 'German']),
    new Cuisine('French', '../assets/foodIcons/French_Croissant.svg', 'country', ['Europe'], []),
    new Cuisine('German', '../assets/foodIcons/German_BeerHall.svg', 'country', ['Europe'], []),
    new Cuisine('Greek', '../assets/foodIcons/Greek_Kebab.svg', 'country', ['Europe'], []),
    new Cuisine('Spanish', '../assets/foodIcons/Spanish_Paella.svg', 'country', ['Europe'], []),
  ]

  selectedCuisines: Cuisine[] = [];
 
  constructor() { }

  getAllCuisines() {
    return this.cuisines;
  }

  selectCuisines(family: string) {
    this.selectedCuisines = [];
    for(let cuisine of this.cuisines) {
      if(cuisine.memberOf.includes(family)) {
        this.selectedCuisines.push(cuisine);
      }
    }
    return this.selectedCuisines;
  }
}
