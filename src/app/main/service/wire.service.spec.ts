import { TestBed, inject } from '@angular/core/testing';

import { WireService } from './wire.service';

describe('WireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WireService]
    });
  });

  it('should be created', inject([WireService], (service: WireService) => {
    expect(service).toBeTruthy();
  }));
});
