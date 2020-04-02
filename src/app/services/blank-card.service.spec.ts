import { TestBed } from '@angular/core/testing';

import { BlankCardService } from './blank-card.service';

describe('BlankCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlankCardService = TestBed.get(BlankCardService);
    expect(service).toBeTruthy();
  });
});
