import { TestBed } from '@angular/core/testing';

import { ChooseImgService } from './choose-img.service';

describe('ChooseImgService', () => {
  let service: ChooseImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
