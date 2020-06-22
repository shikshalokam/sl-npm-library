import { TestBed } from '@angular/core/testing';

import { KendraServiceService } from './kendra-service.service';

describe('KendraServiceService', () => {
  let service: KendraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KendraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
