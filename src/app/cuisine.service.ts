import { Injectable } from '@angular/core';
import { Cuisine } from './cuisine.model';

@Injectable({
  providedIn: 'root'
})
export class CuisineService {
  cuisines: Cuisine[] = [
    new Cuisine('Cafe', '../assets/foodIcons/Cafe.svg', 'type', [], []),
    new Cuisine('Dessert', '../assets/foodIcons/Dessert.svg', 'type', [], []),
    new Cuisine('Fast Casual', '../assets/foodIcons/Fast-Casual.svg', 'type', [], []),
    new Cuisine('Fine Dining', '../assets/foodIcons/Fine-Dining.svg', 'type', [], []),
    new Cuisine('Healthy', '../assets/foodIcons/Healthy_Salad.svg', 'type', [], []),
    new Cuisine('Brunch', '../assets/foodIcons/Meals.svg', 'type', [], []),    

    new Cuisine('Americas', '../assets/foodIcons/Regions/Americas.svg', 'continent', [], ['Canada', 'United States', 'Mexico', 'Central America/Caribbean', 'South America']),
 
    new Cuisine('Canadian', '../assets/foodIcons/Canada_ButterTart-01.svg', 'country', ['Americas'], []),
    
    new Cuisine('United States', '../assets/foodIcons/American_Burger.svg', 'country', ['Americas'], ['Southern/BBQ', 'Hawaiian', 'Southwestern/TexMex', 'Jewish', 'Creole/Cajun', 'Eastern Seaboard']),
    new Cuisine('Hawaiian', '../assets/foodIcons/Pizza.svg', 'style', ['United States'], []),
    new Cuisine('Southwestern/TexMex', '../assets/foodIcons/Mexican_Taco.svg', 'style', ['United States'], []),
    new Cuisine('Jewish', '../assets/foodIcons/Jewish_Bagel.svg', 'style', ['United States'], []),
    new Cuisine('Creole/Cajun', '../assets/foodIcons/Pizza.svg', 'style', ['United States'], []),
    new Cuisine('Eastern Seaboard', '../assets/foodIcons/EasternSeaboard_Lobster.svg', 'style', ['United States'], []),

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

    new Cuisine('Europe', '../assets/foodIcons/Regions/Region_Europe.svg', 'continent', [], ['French', 'Spanish', 'Greek', 'Germanic', 'Italian', 'Belgian', 'Scandinavian', 'Eastern European', 'British Isles']),
    new Cuisine('French', '../assets/foodIcons/French_Croissant.svg', 'country', ['Europe'], []),
    new Cuisine('Germanic', '../assets/foodIcons/German_BeerHall.svg', 'region', ['Europe'], []),
    new Cuisine('Greek', '../assets/foodIcons/Greek_Kebab.svg', 'country', ['Europe'], []),
    new Cuisine('Italian', '../assets/foodIcons/Italian_Pasta.svg', 'country', ['Europe'], []),
    new Cuisine('Spanish', '../assets/foodIcons/Spanish_Paella.svg', 'country', ['Europe'], []),
    new Cuisine('Belgian', '../assets/foodIcons/Pizza.svg', 'region', ['Europe'], []),
    new Cuisine('Scandinavian', '../assets/foodIcons/Pizza.svg', 'region', ['Europe'], []),
    new Cuisine('Eastern European', '../assets/foodIcons/EasternEuropean_Pierogi.svg', 'country', ['Europe'], []), 
    new Cuisine('British Isles', '../assets/foodIcons/Pizza.svg', 'region', ['Europe'], []),

    new Cuisine('Africa', '../assets/foodIcons/Regions/Region_Africa.svg', 'continent', [], ['Moroccan', 'North African', 'Turkish', 'Ethiopian']),
    new Cuisine('Moroccan', '../assets/foodIcons/Pizza.svg', 'country', ['Africa'], []),
    new Cuisine('North African', '../assets/foodIcons/Pizza.svg', 'region', ['Africa'], []),
    new Cuisine('Turkish', '../assets/foodIcons/Pizza.svg', 'country', ['Africa'], []),
    new Cuisine('Ethiopian', '../assets/foodIcons/Pizza.svg', 'country', ['Africa'], []),

    new Cuisine('Australia/Oceania', '../assets/foodIcons/Regions/Region_Australia-Oceania.svg', 'continent', [], ['Australia', 'New Zealand', 'Pacific Islands']),
    new Cuisine('Australian', '../assets/foodIcons/Pizza.svg', 'country', ['Australia-Oceania'], []),
    new Cuisine('New Zealand', '../assets/foodIcons/Pizza.svg', 'country', ['Australia-Oceania'], []),
    new Cuisine('Pacific Islands', '../assets/foodIcons/Pizza.svg', 'country', ['Australia-Oceania'], []),

    new Cuisine('Middle East', '../assets/foodIcons/Regions/Region_Middle-East.svg', 'continent', [], ['Turkish', 'Persian', 'Afghani', 'Iraqi', 'Israeli', 'Lebanese']),
    new Cuisine('Turkish', '../assets/foodIcons/Pizza.svg', 'country', ['Middle-East'], []),
    new Cuisine('Persian', '../assets/foodIcons/Pizza.svg', 'country', ['Middle-East'], []),
    new Cuisine('Afghani', '../assets/foodIcons/Pizza.svg', 'country', ['Middle-East'], []),
    new Cuisine('Iraqi', '../assets/foodIcons/Pizza.svg', 'country', ['Middle-East'], []),
    new Cuisine('Israeli', '../assets/foodIcons/Pizza.svg', 'country', ['Middle-East'], []),
    new Cuisine('Lebanese', '../assets/foodIcons/Pizza.svg', 'country', ['Middle-East'], []),

    new Cuisine('Asia', '../assets/foodIcons/Regions/Region_Asia.svg', 'continent', [], ['Chinese', 'Japanese', 'Korean', 'Indian', 'Southeast Asian', 'Himalayan']),
    new Cuisine('Chinese', '../assets/foodIcons/Pizza.svg', 'country', ['Asia'], []),
    new Cuisine('Japanese', '../assets/foodIcons/Japan_Sushi.svg', 'country', ['Asia'], []),
    new Cuisine('Korean', '../assets/foodIcons/Pizza.svg', 'country', ['Asia'], []),
    new Cuisine('Indian', '../assets/foodIcons/Indian_Samosas.svg', 'country', ['Asia'], []),
    new Cuisine('Himalayan', '../assets/foodIcons/Pizza.svg', 'region', ['Asia'], []),
    new Cuisine('Southeast Asian', '../assets/foodIcons/Pizza.svg', 'region', ['Asia'], ['Vietnamese', 'Thai', 'Malaysian', 'Filipino']),
    new Cuisine('Vietnamese', '../assets/foodIcons/Vietnamese_Pho.svg', 'country', ['Southeast Asian'], []),
    new Cuisine('Thai', '../assets/foodIcons/Thai_PadThai.svg', 'country', ['Southeast Asian'], []),
    new Cuisine('Malaysian', '../assets/foodIcons/Pizza.svg', 'country', ['Southeast Asian'], []),
    new Cuisine('Filipino', '../assets/foodIcons/Pizza.svg', 'country', ['Southeast Asian'], []),

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
