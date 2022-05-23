import { TestBed } from '@angular/core/testing';

import { DnhapService } from './dnhap.service';

describe('DnhapService', () => {
  let service: DnhapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DnhapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
