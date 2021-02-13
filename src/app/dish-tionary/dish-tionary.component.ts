import { Component, OnInit, ViewChild } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-tionary',
  templateUrl: './dish-tionary.component.html',
  styleUrls: ['./dish-tionary.component.scss']
})
export class DishTionaryComponent implements OnInit {
  dishes: any[] = [];
  filterKeyword: string = '';
  filteredDishes: string[] = [];
  errorMessage: string = "Aw crumbs! We couldn't find that search term. Maybe try a different spelling?"

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getAllDishes(); 
    this.filteredDishes = [];
  }

  onFilterDishes(filterKeyword) {
    let keyword = filterKeyword.value.filterKeyword.toLowerCase();
    this.filteredDishes = this.dishService.getKeywordDishes(keyword);
  }  
}
