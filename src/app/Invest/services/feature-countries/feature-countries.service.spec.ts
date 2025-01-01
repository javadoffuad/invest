import { TestBed } from '@angular/core/testing';

import { FeatureCountriesService } from './feature-countries.service';

describe('FeatureCountriesService', () => {
  let service: FeatureCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
