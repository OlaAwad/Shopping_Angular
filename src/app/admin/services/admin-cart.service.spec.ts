import { TestBed } from '@angular/core/testing';

import { AdminCartService } from './admin-cart.service';

describe('AdminCartService', () => {
  let service: AdminCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
