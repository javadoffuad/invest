import { TestBed } from '@angular/core/testing';

import { FeatureCurrenciesService } from './feature-currencies.service';

describe('FeatureStocksService', () => {
  let service: FeatureCurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureCurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
