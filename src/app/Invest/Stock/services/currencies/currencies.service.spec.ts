import { TestBed } from '@angular/core/testing';

import { CurrenciesService } from './currencies.service';

describe('StocksService', () => {
  let service: CurrenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
