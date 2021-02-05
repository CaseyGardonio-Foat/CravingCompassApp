import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-tionary',
  templateUrl: './dish-tionary.component.html',
  styleUrls: ['./dish-tionary.component.scss']
})
export class DishTionaryComponent implements OnInit {
  dishes = [];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getAllDishes(); 
    console.log(this.dishes);
  }

  onFilterDishes() {
    console.log('dishes filtered');
  }
}
