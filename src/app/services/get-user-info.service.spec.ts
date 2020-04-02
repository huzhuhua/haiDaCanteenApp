import { TestBed } from '@angular/core/testing';

import { GetUserInfoService } from './get-user-info.service';

describe('GetUserInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserInfoService = TestBed.get(GetUserInfoService);
    expect(service).toBeTruthy();
  });
});
