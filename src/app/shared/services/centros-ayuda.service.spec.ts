import { TestBed } from '@angular/core/testing';

import { CentrosAyudaService } from './centros-ayuda.service';

describe('CentrosAyudaService', () => {
  let service: CentrosAyudaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosAyudaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
