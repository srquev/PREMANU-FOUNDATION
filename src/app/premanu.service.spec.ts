import { TestBed } from '@angular/core/testing';

import { PremanuService } from './premanuu.service';

describe('PremanuService', () => {
  let service: PremanuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremanuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
