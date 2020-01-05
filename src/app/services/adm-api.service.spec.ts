import { TestBed } from '@angular/core/testing';

import { AdmAPIService } from './adm-api.service';

describe('AdmAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmAPIService = TestBed.get(AdmAPIService);
    expect(service).toBeTruthy();
  });
});
