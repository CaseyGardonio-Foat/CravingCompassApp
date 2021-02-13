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

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getAllDishes(); 
    console.log(this.filteredDishes.length);
  }

  onFilterDishes(filterKeyword) {
    let keyword = filterKeyword.value.filterKeyword.toLowerCase();
    this.filteredDishes = this.dishService.getKeywordDishes(keyword);
  }  
}
