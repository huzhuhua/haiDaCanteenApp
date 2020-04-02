import { TestBed } from '@angular/core/testing';

import { ChooseFileService } from './choose-file.service';

describe('ChooseFileService', () => {
  let service: ChooseFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
