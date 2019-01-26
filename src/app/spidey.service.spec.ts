import { TestBed } from '@angular/core/testing';

import { SpideyService } from './spidey.service';

describe('SpideyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpideyService = TestBed.get(SpideyService);
    expect(service).toBeTruthy();
  });
});
