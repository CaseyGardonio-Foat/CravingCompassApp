import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { RestaurantsDetailComponent } from './restaurants/restaurants-detail/restaurants-detail.component';
import { MapComponent } from './restaurants/map/map.component';
import { RestaurantMenuComponent } from './restaurants/restaurant-menu/restaurant-menu.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { DishTionaryComponent } from './dish-tionary/dish-tionary.component';
import { DishDetailComponent } from './dish-tionary/dish-detail/dish-detail.component';
import { BrowseCuisineComponent } from './browse-cuisine/browse-cuisine.component';
import { BrowseTypeComponent } from './browse-type/browse-type.component';
import { BrowseNationalityComponent } from './browse-cuisine/browse-nationality/browse-nationality.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantsListComponent,
    RestaurantsDetailComponent,
    MapComponent,
    RestaurantMenuComponent,
    RestaurantDetailComponent,
    DishTionaryComponent,
    DishDetailComponent,
    BrowseCuisineComponent,
    BrowseTypeComponent,
    BrowseNationalityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
