import { TestBed } from '@angular/core/testing';

import { BensmoveisService } from './bensmoveis.service';

describe('BensmoveisService', () => {
  let service: BensmoveisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BensmoveisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
