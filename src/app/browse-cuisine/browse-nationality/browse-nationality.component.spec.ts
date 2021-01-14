import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseNationalityComponent } from './browse-nationality.component';

describe('BrowseNationalityComponent', () => {
  let component: BrowseNationalityComponent;
  let fixture: ComponentFixture<BrowseNationalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseNationalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseNationalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
