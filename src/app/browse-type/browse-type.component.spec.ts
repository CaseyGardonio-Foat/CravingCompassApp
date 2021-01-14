import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTypeComponent } from './browse-type.component';

describe('BrowseTypeComponent', () => {
  let component: BrowseTypeComponent;
  let fixture: ComponentFixture<BrowseTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
