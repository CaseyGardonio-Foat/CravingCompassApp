import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsComponent ]
    })
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RestaurantsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the component', () => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the browse-cuisine and browse-types components', () => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.debugElement.componentInstance;
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#browseComponents')).toBeTruthy();
  });
  //this tests whether a <div> on the template with the id "browseComponents" exists, but not whether the page contains instances of those components

});
