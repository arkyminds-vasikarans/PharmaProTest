import { TestBed } from '@angular/core/testing';

import { GsessionService } from './gsession.service';

describe('GsessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GsessionService = TestBed.get(GsessionService);
    expect(service).toBeTruthy();
  });
});
