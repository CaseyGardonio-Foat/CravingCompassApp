import { Component, OnInit, Input } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../dish.model';

@Component({
  selector: 'app-browse-cuisine',
  templateUrl: './browse-cuisine.component.html',
  styleUrls: ['./browse-cuisine.component.css']
})
export class BrowseCuisineComponent implements OnInit {
  @Input() dishArray: Dish[]

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.dishArray = this.dishService.getKeywordDishes('keyword');
  }

}
