import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RestaurantsListComponent } from './restaurants-list.component';
// import { SearchService } from '../../search.service';


describe('RestaurantsListComponent', () => {
  let component: RestaurantsListComponent;
  let fixture: ComponentFixture<RestaurantsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    })
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(RestaurantsListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the component', () => {
    fixture = TestBed.createComponent(RestaurantsListComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
