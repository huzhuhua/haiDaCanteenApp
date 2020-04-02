import { TestBed } from '@angular/core/testing';

import { MyProductService } from './my-product.service';

describe('MyProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyProductService = TestBed.get(MyProductService);
    expect(service).toBeTruthy();
  });
});
