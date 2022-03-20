import { TestBed } from '@angular/core/testing';

import { StaffNavGuard } from './staff-nav.guard';

describe('StaffNavGuard', () => {
  let guard: StaffNavGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StaffNavGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
