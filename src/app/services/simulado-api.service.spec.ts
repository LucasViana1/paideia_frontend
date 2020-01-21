import { TestBed } from '@angular/core/testing';

import { SimuladoAPIService } from './simulado-api.service';

describe('SimuladoAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimuladoAPIService = TestBed.get(SimuladoAPIService);
    expect(service).toBeTruthy();
  });
});
