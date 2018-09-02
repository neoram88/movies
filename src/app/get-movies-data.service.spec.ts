import { TestBed, inject } from '@angular/core/testing';

import { GetMoviesDataService } from './get-movies-data.service';

describe('GetMoviesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMoviesDataService]
    });
  });

  it('should be created', inject([GetMoviesDataService], (service: GetMoviesDataService) => {
    expect(service).toBeTruthy();
  }));
});
