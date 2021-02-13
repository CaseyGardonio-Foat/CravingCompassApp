import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DishTionaryComponent } from "./dish-tionary/dish-tionary.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

const appRoutes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'dish-tionary', component: DishTionaryComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurant-results', component: RestaurantsComponent},
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/page-not-found'}
  ]

  @NgModule({
     imports: [
      RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
     ],
     exports: [RouterModule] 
  })

  export class AppRoutingModule {}