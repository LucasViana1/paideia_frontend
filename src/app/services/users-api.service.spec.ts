import { TestBed } from '@angular/core/testing';

import { UsersAPIService } from './users-api.service';

describe('UsersAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersAPIService = TestBed.get(UsersAPIService);
    expect(service).toBeTruthy();
  });
});
