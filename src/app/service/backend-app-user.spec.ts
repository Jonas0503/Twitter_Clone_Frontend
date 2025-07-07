import { TestBed } from '@angular/core/testing';

import { BackendAppUser } from './backend-app-user';

describe('BackendAppUser', () => {
  let service: BackendAppUser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendAppUser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
