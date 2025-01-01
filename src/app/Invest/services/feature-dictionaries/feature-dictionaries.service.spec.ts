import { TestBed } from '@angular/core/testing';

import { FeatureDictionariesService } from './feature-dictionaries.service';

describe('FeatureDictionariesService', () => {
  let service: FeatureDictionariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureDictionariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
