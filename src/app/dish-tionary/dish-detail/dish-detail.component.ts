import { Component, OnInit } from '@angular/core';
import { DishService } from 'src/app/dish.service';
import { Dish } from '../../dish.model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishes = this.dishService.getAllDishes(); 
  }

}
