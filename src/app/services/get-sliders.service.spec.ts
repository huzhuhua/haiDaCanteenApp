import { TestBed } from '@angular/core/testing';

import { GetSlidersService } from './get-sliders.service';

describe('GetSlidersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSlidersService = TestBed.get(GetSlidersService);
    expect(service).toBeTruthy();
  });
});
