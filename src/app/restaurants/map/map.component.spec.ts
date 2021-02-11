import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MapComponent } from './map.component';
// import { SearchService } from '../../search.service';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  // let searchService = fixture.debugElement.injector.get(SearchService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ MapComponent ]
    })
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MapComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the component', () => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
