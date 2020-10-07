import { TestBed } from '@angular/core/testing';

import { EcliteratureService } from './ecliterature.service';

describe('EcliteratureService', () => {
  let service: EcliteratureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcliteratureService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
