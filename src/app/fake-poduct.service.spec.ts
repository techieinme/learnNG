import { TestBed } from '@angular/core/testing';

import { FakePoductService } from './fake-poduct.service';

describe('FakePoductService', () => {
  let service: FakePoductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakePoductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
