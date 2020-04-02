import { TestBed } from '@angular/core/testing';

import { OpenAcountService } from './open-acount.service';

describe('OpenAcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpenAcountService = TestBed.get(OpenAcountService);
    expect(service).toBeTruthy();
  });
});
