import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BrowseCuisineComponent } from './browse-cuisine.component';
import { CuisineService } from '../cuisine.service';

describe('BrowseCuisineComponent', () => {
  let component: BrowseCuisineComponent;
  let fixture: ComponentFixture<BrowseCuisineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseCuisineComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should create the component', () => {
    fixture = TestBed.createComponent(BrowseCuisineComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get cuisines from the cuisine.service on init', () => {
    fixture = TestBed.createComponent(BrowseCuisineComponent);
    component = fixture.debugElement.componentInstance;
    let cuisineService = fixture.debugElement.injector.get(CuisineService);
    fixture.detectChanges();
    expect(cuisineService.cuisines.length).toEqual(component.cuisines.length);
  });
});
