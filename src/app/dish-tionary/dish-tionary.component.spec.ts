import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishTionaryComponent } from './dish-tionary.component';

describe('DishTionaryComponent', () => {
  let component: DishTionaryComponent;
  let fixture: ComponentFixture<DishTionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishTionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishTionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
