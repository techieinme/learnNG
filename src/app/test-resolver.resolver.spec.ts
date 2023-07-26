import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { testResolverResolver } from './test-resolver.resolver';

describe('testResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => testResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
