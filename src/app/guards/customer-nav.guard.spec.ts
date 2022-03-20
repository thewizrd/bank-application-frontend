import { TestBed } from '@angular/core/testing';

import { CustomerNavGuard } from './customer-nav.guard';

describe('CustomerNavGuard', () => {
  let guard: CustomerNavGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerNavGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
