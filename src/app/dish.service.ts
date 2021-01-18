import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishes: Dish[] = [
    new Dish('croissant', 'Flaky French laminated pastry, often shaped in the form of a crescent.', 
    '../assets/photos/croissant_pexels-pixabay-2135.jpg',
    ['french', 'breakfast', 'bakery', 'cafe']),
    new Dish('paella', 'Spanish dish of rice mixed with vegetables and proteins--often seafood, chicken, and/or sausage--cooked over a fire in large flat pan.',
    '../assets/photos/paella_pexels-joshua-miranda-4305836_square.jpg', ['spanish', 'dinner']),
    new Dish('tortilla', 'Spanish omlet-like dish consisting of potatoes and onions bound with eggs. Other ingredients are sometimes added. Also known as "tortilla espanola" or "tortilla de patatas".',
    '../tortillaEspanola_chase-daley-mFfLHPr6ZZs-unsplash_square', ['spanish', 'tapas']),
  ];

  constructor() { }

  getAllDishes(){
    return this.dishes;
  }

  getKeywordDishes(selectedKeyWord) {
    let keywordDishes = [];
    for(let dish of this.dishes){
      if(dish.keyWords.includes(selectedKeyWord)){
        keywordDishes.push(dish);
      }
      return keywordDishes;
    }
  }
}
