import { TestBed } from '@angular/core/testing';

import { ActivitySectorsService } from './activity-sectors.service';

describe('ActivitySectorsService', () => {
  let service: ActivitySectorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivitySectorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
