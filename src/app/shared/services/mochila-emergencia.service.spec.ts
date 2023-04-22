import { TestBed } from '@angular/core/testing';

import { MochilaEmergenciaService } from './mochila-emergencia.service';

describe('MochilaEmergenciaService', () => {
  let service: MochilaEmergenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MochilaEmergenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
