import { TestBed, inject } from '@angular/core/testing';

import { SeguimientosService } from './seguimientos.service';

describe('SeguimientosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeguimientosService]
    });
  });

  it('should be created', inject([SeguimientosService], (service: SeguimientosService) => {
    expect(service).toBeTruthy();
  }));
});
