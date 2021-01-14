import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsDetailComponent } from './restaurants-detail.component';

describe('RestaurantsDetailComponent', () => {
  let component: RestaurantsDetailComponent;
  let fixture: ComponentFixture<RestaurantsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
