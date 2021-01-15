import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsListComponent } from './restaurants/restaurants-list/restaurants-list.component';
import { MapComponent } from './restaurants/map/map.component';
import { RestaurantMenuComponent } from './restaurants/restaurant-menu/restaurant-menu.component';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { DishTionaryComponent } from './dish-tionary/dish-tionary.component';
import { DishDetailComponent } from './dish-tionary/dish-detail/dish-detail.component';
import { BrowseCuisineComponent } from './browse-cuisine/browse-cuisine.component';
import { BrowseTypeComponent } from './browse-type/browse-type.component';
import { BrowseNationalityComponent } from './browse-cuisine/browse-nationality/browse-nationality.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'dish-tionary', component: DishTionaryComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurant-results', component: RestaurantsComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantsListComponent,
    MapComponent,
    RestaurantMenuComponent,
    RestaurantDetailComponent,
    DishTionaryComponent,
    DishDetailComponent,
    BrowseCuisineComponent,
    BrowseTypeComponent,
    BrowseNationalityComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
