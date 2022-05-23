import { TestBed } from '@angular/core/testing';

import { DangNhapService } from './dang-nhap.service';

describe('DangNhapService', () => {
  let service: DangNhapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DangNhapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
