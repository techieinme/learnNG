import { TestBed } from '@angular/core/testing';

import { SampleOneService } from './sample-one.service';

describe('SampleOneService', () => {
  let service: SampleOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
