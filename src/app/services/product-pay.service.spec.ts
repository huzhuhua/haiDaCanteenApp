import { TestBed } from '@angular/core/testing';

import { ProductPayService } from './product-pay.service';

describe('ProductPayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductPayService = TestBed.get(ProductPayService);
    expect(service).toBeTruthy();
  });
});
