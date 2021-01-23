import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishes: Dish[] = [
    new Dish('croissant', 'Flaky French laminated pastry, often shaped in the form of a crescent.', 
    '../assets/photos/croissant_pexels-pixabay-2135_masked.png',
    ['french', 'breakfast', 'bakery', 'cafe']),
    new Dish('paella', 'Traditional Spanish dish of saffron-seasoned rice cooked with a variety of proteins and/or vegetables in a large, shallow pan known as a paellera.',
    '../assets/photos/paella_pexels-joshua-miranda-4305836_masked.png', ['Europe', 'Mediterranean', 'Spanish']),
    new Dish('Tortilla', 'Spanish-style omelet consisting of sliced potatoes and onions bound with whisked eggs. Additional ingredients, such as fresh vegetables, chorizo, or jamon are sometimes added.',
    '../assets/photos/tortillaEspanola_mediterraneanliving_masked.png', ['Europe', 'Mediterranean', 'Spanish', 'tapas']),
    new Dish('Croquetas', 'Popular Spanish snack, often served as a tapa, consisting of a crispy, deep-fried shell surrounding a creamy bechamel-based filling and flavored with jamon, chicken, bacalao, mushrooms, etc.', '../assets/photos/croquetas_cookidoo-thermomix_masked.png', ['Europe', 'Mediterranean', 'Spanish', 'croquettes', 'tapas']),
    new Dish('Patatas Bravas', 'Popular Spanish tapa of crispy fried potato cubes doused in a firey red "brava" tomato- and paprika-based sauce, and often served with garlicky aioli.', '../assets/photos/patatasBravas_chase-daley-mFfLHPr6ZZs-unsplash_masked.png', ['Europe', 'Mediterranean', 'Spanish', 'tapas']),
    new Dish('Gazpacho', 'Famous chilled vegetable soup originating in Andalucia and made from olive oli and bread pureed with tomatoes, onions, cucumbers, and other fresh vegetables and served with a variety of garnishes.', '../assets/photos/gazpacho_chase-daley-mFfLHPr6ZZs-unsplash_masked.png', ['Europe', 'Mediterranean', 'Spanish']),
    new Dish('Poke', 'Traditional salad of fresh, raw fish or seafood--traditionally ahi tuna or octopus--mixed with vegetables, herbs, condiments, and seasoning. Can be served alone as an appetizer or with rice as a full meal.', '../assets/photos/poke_pexels-ania-rude-6169445_masked.png', ['Americas', 'USA', 'Hawaiian']),
    new Dish('Kalua Pig', 'Whole, salt-seasoned pig, wrapped with banana or ti leaves, and slow-roasted in an underground pit heated by lava rocks.', '../assets/photos/kaluaPork_KingsHawaiianBakery_masked.png', ['americas', 'USA', 'Hawaiian']),
    new Dish('Laulau', 'Hawaiian dish of pork, butterfish, or other proteins wrapped in luau (taro) leaves and steamed, traditionally in an underground oven heated by lava rocks. Often served with rice and/or poi.', '../assets/photos/lauLau_foodland_masked.png', ['Americas', 'USA', 'Hawaiian']),
    new Dish('Shave Ice', 'Popular Hawaiian dessert of shaved (not crushed) ice flavored with fruit syrups and garnished with a variety of toppings.', '../assets/photos/shaveIce_chase-daley-mFfLHPr6ZZs-unsplash_masked.png', ['Americas', 'USA', 'Hawaiian', 'dessert']),
    
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
