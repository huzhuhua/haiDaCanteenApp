import { TestBed } from '@angular/core/testing';

import { RouterHandlerService } from './router-handler.service';

describe('RouterHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterHandlerService = TestBed.get(RouterHandlerService);
    expect(service).toBeTruthy();
  });
});
