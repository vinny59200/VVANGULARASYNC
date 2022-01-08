import { TestBed } from '@angular/core/testing';

import { VVService } from './vv.service';

describe('VvserviceService', () => {
  let service: VVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
