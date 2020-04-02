import { TestBed } from '@angular/core/testing';

import { GetCodeService } from './get-code.service';

describe('GetCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCodeService = TestBed.get(GetCodeService);
    expect(service).toBeTruthy();
  });
});
