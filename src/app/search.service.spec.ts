import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;

  //Angular CLI-created test; n.b. HttpClientTestingModule imported above
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(SearchService);
  });

  /* first attempt at Anya's solution
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchService]
    }).compileComponents();
    service = TestBed.inject(SearchService);
  });
  */

  /* second attempt at Anya's solution
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchService]
    }).compileComponents();
  });
  */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
