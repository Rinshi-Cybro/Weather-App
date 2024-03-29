import { TestBed } from '@angular/core/testing';

import { SavedCityService } from './saved-city.service';

describe('SavedCityService', () => {
  let service: SavedCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
