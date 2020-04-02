import { TestBed } from '@angular/core/testing';

import { BindCardService } from './bind-card.service';

describe('BindCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BindCardService = TestBed.get(BindCardService);
    expect(service).toBeTruthy();
  });
});
