import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishTionaryComponent } from './dish-tionary.component';
import { DishService } from '../dish.service';

describe('DishTionaryComponent', () => {
  let component: DishTionaryComponent;
  let fixture: ComponentFixture<DishTionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DishTionaryComponent ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishTionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get dishes from the dish.service on init', () => {
    fixture = TestBed.createComponent(DishTionaryComponent);
    component = fixture.debugElement.componentInstance;
    let dishService = fixture.debugElement.injector.get(DishService);
    fixture.detectChanges();
    expect(dishService.dishes.length).toEqual(component.dishes.length);
  });
});
