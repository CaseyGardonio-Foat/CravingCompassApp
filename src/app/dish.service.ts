import { Injectable } from '@angular/core';
import { Dish } from './dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishes: Dish[] = [
    new Dish('Aebleskiver', 'description', '../assets/photos/aebleskiver_23800050_1616982731694316_3739861936436928979_o_ScandiKitchen_masked.png', ['aebleskiver', 'europe', 'european', 'northern europe', 'scandinavia', 'scandinavian', 'danish', 'pancake', 'breakfast', 'dessert', 'secondary']),
    new Dish('Aji de Gallina', 'description', '../assets/photos/ajiDeGallina_spicy-creamed-chicken-aji-de-gallina-3029517_Hero-5b7c0614c9e77c004f7948c4_SpruceEats_masked.png', ['aji de gallina', 'aji', 'americas', 'south america', 'south american', 'peru', 'peruvian', 'chicken'], 'warning'),
    new Dish('Anticuchos', 'description', '../assets/photos/anticuchos_perusmaq_masked.png', ['anticuchos', 'anticucho', 'americas', 'south america', 'south american', 'peru', 'peruvian'], 'danger'),
    new Dish('Arancini', 'description', '../assets/photos/arancini_1454_39_1429106814_JamieOliver_masked.png', ['arancini', 'europe', 'european', 'mediterranean', 'italy', 'italian', 'croquettes', 'risotto ball', 'rice'], 'primary'),
    new Dish('Arepa', '', '../assets/photos/arepa-de-domino-venezuelan-corncake-filled-with-black-beans_Goya_masked.png', ['arepa', 'arepas', 'americas', 'south america', 'south american', 'central america', 'central american', 'venezuela', 'venezuelan', 'colombia', 'colombian'], 'success'),
    new Dish('Bacalao/Balcalhau', '', '../assets/photos/bacalao_desalarbacalao_MiaRevista_masked.png', ['bacalao', 'europe', 'european', 'portugal', 'portuguese', 'spain', 'spanish', 'mediterranean', 'bacalhau', 'fish', 'seafood'], 'info'),
    new Dish('Bagel and Lox', '', '../assets/photos/bagelLox_101094-hero-01-ea26c2ca36af4577b1d40e0af807754b_SpruceEats_masked.png', ['bagel', 'bagels', 'lox', 'smoked salmon', 'bagels and lox', 'americas', 'usa', 'united states', 'jewish', 'deli', 'bread', 'fish', 'breakfast', 'brunch'], 'secondary'),
    new Dish('Bagel', '', '../assets/photos/bagels_tara-evans-6FbArnPXEVg-unsplash_masked.png', ['bagel', 'bagels', 'americas', 'usa', 'united states', 'jewish', 'deli', 'bread', 'breakfast', 'brunch', 'cafe'], 'warning'),
    new Dish('Ban Xeoh', '', '../assets/photos/bahnXeo_SFS_sizzling_saigon_crepes-10_bgyzzt_AmericasTestKitchen_masked.png', ['asia', 'asian', 'southeast asia', 'southeast asian', 'vietnam', 'vietnamese', 'crepe'], 'success'),
    new Dish('Bangers and Mash', '', '../assets/photos/bangersAndMash_theSpruceEats_masked.png', ['bangers', 'bangers and mash', 'mash', 'europe', 'european', 'great britain', 'united kingdom', 'uk', 'english', 'british', 'scottish', 'irish', 'pub', 'pub food', 'sausage'], 'secondary'),
    new Dish('Bahn Mi', '', '../assets/photos/banhMi_horiz-5c9698d8003748eab2b4b4827bb77d8a_masked.png', ['bahn mi', 'asia', 'asian', 'southeast asia', 'southeast asian', 'vietnam', 'vietnamese', 'sandwich'], 'danger'),
    new Dish('Barbeque', '', '../assets/photos/barbequeRibs_bao-menglong-y_wGdAJMdOo-unsplash_masked.png', ['barbeque', 'bbq', 'americas', 'american', 'usa', 'united states', 'southern', 'ribs', 'meat', 'smoked'], 'primary'),
    new Dish('Beignets', '', '../assets/photos/beignets-web_LouisianaCookin_masked.png', ['beignets', 'beignet', 'americas', 'american', 'north america', 'north american', 'usa', 'united states', 'creole', 'cajun', 'louisiana', 'new orleans', 'bread', 'dessert', 'doughnut', 'southern'], 'info'),
    new Dish('Biryani', '', '../assets/photos/biryani_Biryani-min_IFFIndia_masked.png', ['biryani', 'asia', 'india', 'indian', 'rice'], 'warning'),
    new Dish('Boxty', '', '../assets/photos/boxty_culinaryTravelGuide_masked.png', ['boxty', 'europe', 'european', 'great britain', 'united kingdon', 'ireland', 'irish', 'potato', 'pancake', 'pancakes', 'potato pancakes'], 'success'),
    new Dish('Bun', '', '../assets/photos/bun_Bun-Thit-Nuong-Vietnamese-Vermicelli-with-Pork-6-of-12_SmartNutrition_masked.png', ['bun', 'bun thit nuong', 'asia', 'asian', 'southeast asia', 'southeast asian', 'vietnam', 'vietnamese', 'noodles'], 'primary'),
    new Dish('Burger/Hamburger', '', '../assets/photos/burger_pexels-valeria-boltneva-1639565_masked.png', ['burger', 'hamburger', 'americas', 'american', 'usa', 'united states', 'fast food', 'sandwich'], 'danger'),
    new Dish('Burrito', '', '../assets/photos/burrito_pexels-nishant-aneja-2955819_masked.png', ['burrito', 'americas', 'american', 'north america', 'north american', 'mexico', 'mexican'], 'primary'),
    new Dish('Butter Tart', '', '../assets/photos/butterTart_FEAST-OCT-18-BUTTER-TARTS_WestJetMagazine_masked.png', ['butter tart', 'america', 'american', 'north america', 'north american', 'canada', 'canadian', 'dessert', 'tart', 'pie'], 'info'),
    new Dish('Ca Kho To', '', '../assets/photos/caKhoTo_a1af14ee4ea32255f11c5ba734f153fe_pinterest_masked.png', ['ca kho to', 'asia', 'asian', 'korea', 'korean', 'fish', 'stew'], 'success'),
    new Dish('Caldo Verde', '', '../assets/photos/caldoVerde_20161212-caldo-verde-portuguese-potato-kale-soup-recipe-06_SeriousEats_masked.png', ['caldo verde', 'europe', 'european', 'portugal', 'portuguese', 'soup'], 'secondary'),
    new Dish('Caprese', '', '../assets/photos/caprese_Caprese-Salad_EXPS_FT20_50347_F_0610_1_home_TasteOfHome_masked.png', ['caprese', 'europe', 'european', 'mediterranean', 'italy', 'italian', 'cheese', 'salad'], 'danger'),
    new Dish('Cataplana', '', '../assets/photos/cataplana_portuguese-clams-sausage_LeitesCulinaria_masked.png', ['cataplana', 'european', 'europe', 'portugal', 'portuguese', 'cooking method', 'cooking vessel', 'pan'], 'secondary'),
    new Dish('Catfish', '', '../assets/photos/catfish_4128796-hero-19a23bb837a04c66a65ee6c8cb31ff70_SpruceEats_masked.png', ['catfish', 'americas', 'american', 'north america', 'north american', 'usa', 'united states', 'southern', 'fish'], 'success'),
    new Dish('Ceviche', '', '../assets/photos/ceviche_41531-sfs-shrimp-ceviche-tomato-jicama-avocado-23_CooksIllustrated_masked.png', ['ceviche', 'americas', 'american', 'south america', 'south american', 'central america', 'central american', 'caribbean', 'peru', 'peruvian', 'fish', 'raw'], 'warning'),
    new Dish('Chile Relleno', '', '../assets/photos/chileRelleno_k_Photo_Recipes_2019-07-how-to-chile-rellenos_How-to-make-best-chile-rellenos_056_TheKitchn_masked.png', ['chile relleno', 'chiles rellenos', 'chili relleno', 'chilis rellenos', 'americas', 'american', 'north america', 'north american', 'mexico', 'mexican', 'fried', 'stuffed'], 'danger'),
    new Dish('Choucroute Garnie', '', '../assets/photos/choucrouteGarnie_200612-r-xl-choucroute-garnie_FoodAndWine_masked.png', ['choucroute garnie', 'choucroute', 'europe', 'european', 'germany', 'german', 'france', 'french', 'sausage', 'meat'], 'warning'),
    new Dish('Churrasco', '', '../assets/photos/churrasco_featured-brazilian-churrasco_BarbecueBible_masked.png', ['churrasco', 'americas', 'american', 'south america', 'south american', 'brazil', 'brazillian', 'meat'], 'secondary'),
    new Dish('Cockaleekie Soup', '', '../assets/photos/cockaleekie_timesColonist_masked.png', ['cockaleekie', 'cockaleekie soup', 'cockaleekie stew', 'europe', 'european', 'united kingdom', 'uk', 'great britain', 'scotland', 'scottish', 'soup', 'stew'], 'danger'),
    new Dish('Colcannon', '', '../assets/photos/colcannon_tasteOfHome_masked.png', ['colcannon', 'europe', 'european', 'great britain', 'uk', 'united kingdom', 'ireland', 'irish', 'potato', 'potatoes'], 'success'),
    new Dish('Coq au Vin', '', '../assets/photos/coq-au-vin-bd2fe80274374c61bb824ac2d0378459_SpruceEats_masked.png', ['coq au vin', 'europe', 'european', 'france', 'french', 'chicken', 'stew'], 'primary'),
    new Dish('Cornbread', '', '../assets/photos/cornbread-3054179-15-5b43cd2f46e0fb0036d95cae_SpruceEats_masked.png', ['cornbread', 'americas', 'american', 'north america', 'north american', 'usa', 'united states', 'southern', 'bread'], 'info'),
    new Dish('Coxinhas', '', '../assets/photos/coxinhas_pexels-vinícius-caricatte-4243302_masked.png', ['coxinhas', 'coxinha', 'americas', 'american', 'south america', 'south american', 'brazil', 'brazillian', 'croquettes', 'chicken'], 'success'),
    new Dish('Cranachan', '', '../assets/photos/cranachan_BBC_masked.png', ['cranachan', 'europe', 'european', 'great britain', 'uk', 'united kingdom', 'scotland', 'scottish', 'dessert'], 'danger'),
    new Dish('Crepes', '', '../assets/photos/crepes_pexels-eileen-lamb-3225499_masked.png', ['crepes', 'crepe', 'europe', 'european', 'france', 'french', 'north america', 'north american', 'canada', 'canadian', 'pancake', 'pancakes', 'dessert'], 'info'),
    new Dish('Croissant', '', '../assets/photos/croissant_pexels-pixabay-2135_masked.png', ['croissant', 'europe', 'european', 'france', 'french', 'bread', 'breakfast', 'cafe'], 'secondary'),
    new Dish('Croquetas', '', '../assets/photos/croquetas_cookidoo-thermomix_masked.png', ['croquetas', 'europe', 'european', 'spain', 'spanish', 'mediterranean', 'croquettes', 'tapas'], 'primary'),
    new Dish('Crumpet', '', '../assets/photos/crumpet_countryfile_masked.png', ['crumpet', 'crumpets', 'europe', 'european', 'great britain', 'uk', 'united kingdom', 'england', 'english', 'bread'], 'secondary'),
    new Dish('Dal', '', '../assets/photos/daal_Nepali-Dal-Bhat-FI-500x500_CooksHideout_masked.png', ['dal', 'dal bhat', 'asia', 'asian', 'himalayas', 'himalayan', 'nepal', 'nepalese', 'lentils', 'soup', 'stew'], 'primary'),
    new Dish('Dosa', '', '../assets/photos/dosa_maxresdefault_youtube_CookingShooking_masked.png', ['dosa', 'dosas', 'asia', 'asian', 'india', 'indian', 'pancake'], 'info'),
    new Dish('Gazpacho', 'Famous chilled vegetable soup originating in Andalucia and made from olive oli and bread pureed with tomatoes, onions, cucumbers, and other fresh vegetables and served with a variety of garnishes.', '../assets/photos/gazpacho_chase-daley-mFfLHPr6ZZs-unsplash_masked.png', ['europe', 'mediterranean', 'spanish'], 'success'),
    new Dish('Kalua Pig', 'Whole, salt-seasoned pig, wrapped with banana or ti leaves, and slow-roasted in an underground pit heated by lava rocks.', '../assets/photos/kaluaPork_KingsHawaiianBakery_masked.png', ['americas', 'usa', 'hawaiian'], 'warning'),
    new Dish('paella', 'Traditional Spanish dish of saffron-seasoned rice cooked with a variety of proteins and/or vegetables in a large, shallow pan known as a paellera.',
    '../assets/photos/paella_pexels-joshua-miranda-4305836_masked.png', ['europe', 'mediterranean', 'spanish'], 'danger'),
    new Dish('Poke', 'Traditional salad of fresh, raw fish or seafood--traditionally ahi tuna or octopus--mixed with vegetables, herbs, condiments, and seasoning. Can be served alone as an appetizer or with rice as a full meal.', '../assets/photos/poke_pexels-ania-rude-6169445_masked.png', ['americas', 'usa', 'hawaiian'], 'success'),
    new Dish('Patatas Bravas', 'Popular Spanish tapa of crispy fried potato cubes doused in a firey red "brava" tomato- and paprika-based sauce, and often served with garlicky aioli.', '../assets/photos/patatasBravas_chase-daley-mFfLHPr6ZZs-unsplash_masked.png', ['europe', 'mediterranean', 'spanish', 'tapas'], 'primary'),
    new Dish('Shave Ice', 'Popular Hawaiian dessert of shaved (not crushed) ice flavored with fruit syrups and garnished with a variety of toppings.', '../assets/photos/shaveIce_chase-daley-mFfLHPr6ZZs-unsplash_masked.png', ['americas', 'usa', 'hawaiian', 'dessert'], 'danger'),
    new Dish('Tortilla', 'Spanish-style omelet consisting of sliced potatoes and onions bound with whisked eggs. Additional ingredients, such as fresh vegetables, chorizo, or jamon are sometimes added.',
    '../assets/photos/tortillaEspanola_mediterraneanliving_masked.png', ['europe', 'mediterranean', 'spanish', 'tapas'], 'secondary'),
    new Dish('','','',[]),
  ];
  
  keywordDishes: any[] = [];

  constructor() { }

  getAllDishes(){
    return this.dishes;
  }

  getKeywordDishes(selectedKeyword) {
    this.keywordDishes = [];
    for(let dish of this.dishes){
      if(dish.keyWords.includes(selectedKeyword)){
        this.keywordDishes.push(dish);
      }
    }
    return this.keywordDishes;
  }
}
