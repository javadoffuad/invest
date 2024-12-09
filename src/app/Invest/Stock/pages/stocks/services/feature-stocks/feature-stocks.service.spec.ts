import { TestBed } from '@angular/core/testing';

import { FeatureStocksService } from './feature-stocks.service';

describe('FeatureStocksService', () => {
  let service: FeatureStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
