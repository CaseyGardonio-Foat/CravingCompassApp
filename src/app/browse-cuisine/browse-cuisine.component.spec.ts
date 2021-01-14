import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseCuisineComponent } from './browse-cuisine.component';

describe('BrowseCuisineComponent', () => {
  let component: BrowseCuisineComponent;
  let fixture: ComponentFixture<BrowseCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseCuisineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
