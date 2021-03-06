import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { LandingPageComponent } from './landing-page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [ LandingPageComponent ]
    })
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LandingPageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the component', () => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  // it('should display the browse-cuisine component', () => {
  //   fixture = TestBed.createComponent(LandingPageComponent);
  //   component = fixture.debugElement.componentInstance;
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('browseComponents')).toContain('<app-browse-cuisine></app-browse-cuisine>');
  // });
});
