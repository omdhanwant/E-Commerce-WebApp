import { TestBed } from '@angular/core/testing';

import { AuthGaurd } from './auth-gaurd.service';

describe('AuthGaurd', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGaurd = TestBed.get(AuthGaurd);
    expect(service).toBeTruthy();
  });
});
