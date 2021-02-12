import { Injectable } from '@angular/core';
import { Cuisine } from './cuisine.model';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  cuisines: Cuisine[] = [
    new Cuisine('Americas', '../assets/foodIcons/Regions/Americas.svg', 'continent', [], ['Canada', 'United States', 'Mexico', 'Central America/Caribbean', 'South America']),
    // new Cuisine('North America', '../assets/foodIcons/Regions/NorthAmerica.svg', 'region', ['Americas'], ['Canada', 'USA', 'Mexico']),
    new Cuisine('Canadian', '../assets/foodIcons/Regions/Canada_ButterTart-01.svg', 'country', ['Americas'], []),
    
    new Cuisine('United States', '../assets/foodIcons/Regions/American_Burger.svg', 'country', ['Americas'], ['Southern/BBQ', 'Hawaiian', 'Southwestern/TexMex', 'Jewish', 'Creole/Cajun', 'Eastern Seaboard']),
    new Cuisine('Hawaiian', '../assets/foodIcons/Pizza.svg', 'style', ['United States'], []),
    new Cuisine('Southwestern/TexMex', '../assets/foodIcons/Mexican_Taco.svg', 'style', ['United States'], []),
    new Cuisine('Jewish', '../assets/foodIcons/Jewish_Bagel.svg', 'style', ['United States'], []),
    new Cuisine('Creole/Cajun', '../assets/foodIcons/Pizza.svg', 'style', ['United States'], []),
    new Cuisine('Eastern Seaboard', '../assets/foodIcons/Pizza.svg', 'style', ['United States'], []),

    new Cuisine('Mexican', '../assets/foodIcons/Mexican_Taco.svg', 'country', ['Americas'], []),
    
    new Cuisine('Central America/Caribbean', '../assets/foodIcons/Regions/CentralAmerica_Caribbean.svg', 'region', ['Americas'], ['Central America', 'Jamaica', 'Puerto Rico', 'Cuba']),
    new Cuisine('Central American', '../assets/foodIcons/Pizza.svg', 'country', ['Central America/Caribbean'], []),
    new Cuisine('Jamaican', '../assets/foodIcons/Pizza.svg', 'country', ['Central America/Caribbean'], []),
    new Cuisine('Puerto Rican', '../assets/foodIcons/Pizza.svg', 'country', ['Central America/Caribbean'], []),
    new Cuisine('Cuban', '../assets/foodIcons/Pizza.svg', 'country', ['Central America/Caribbean'], []),
    new Cuisine('Other Caribbean', '../assets/foodIcons/Pizza.svg', 'country', ['Central America/Caribbean'], []),

    new Cuisine('South America', '../assets/foodIcons/Regions/SouthAmerica.svg', 'region', ['Americas'], ['Argentina', 'Brazil', 'Peru', 'Venezuela']),
    new Cuisine('Argentina', '../assets/foodIcons/Pizza.svg', 'country', ['South America'], []),
    new Cuisine('Brazil', '../assets/foodIcons/Pizza.svg', 'country', ['South America'], []),
    new Cuisine('Peru', '../assets/foodIcons/Pizza.svg', 'country', ['South America'], []),
    new Cuisine('Venezuela', '../assets/foodIcons/Pizza.svg', 'country', ['South America'], []),

    new Cuisine('Europe', 'imagePath: string', 'continent', [], ['French', 'Spanish', 'Greek', 'German']),
    new Cuisine('French', '../assets/foodIcons/French_Croissant.svg', 'country', ['Europe'], []),
    new Cuisine('German', '../assets/foodIcons/German_BeerHall.svg', 'country', ['Europe'], []),
    new Cuisine('Greek', '../assets/foodIcons/Greek_Kebab.svg', 'country', ['Europe'], []),
    new Cuisine('Italian', '../assets/foodIcons/Italian_Pasta.svg', 'country', ['Europe'], []),
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
