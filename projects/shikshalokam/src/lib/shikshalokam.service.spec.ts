import { TestBed } from '@angular/core/testing';

import { ShikshalokamService } from './shikshalokam.service';

describe('ShikshalokamService', () => {
  let service: ShikshalokamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShikshalokamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
