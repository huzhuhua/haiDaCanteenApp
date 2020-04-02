import { TestBed } from '@angular/core/testing';

import { LifeHookService } from './life-hook.service';

describe('LifeHookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeHookService = TestBed.get(LifeHookService);
    expect(service).toBeTruthy();
  });
});
