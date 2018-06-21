import { TestBed, inject } from '@angular/core/testing';

import { CircularesService } from './circulares.service';

describe('CircularesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CircularesService]
    });
  });

  it('should be created', inject([CircularesService], (service: CircularesService) => {
    expect(service).toBeTruthy();
  }));
});
