import { TestBed } from '@angular/core/testing';

import { JjService } from './jj.service';

describe('JjService', () => {
  let service: JjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
