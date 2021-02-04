import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
  });

  // beforeEach(() => {
  //   // fixture = TestBed.createComponent(AboutComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the component', () => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display text content in the About component', () => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.debugElement.componentInstance;
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toBeTruthy();
  });
});
