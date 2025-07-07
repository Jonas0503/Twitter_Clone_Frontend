import { TestBed } from '@angular/core/testing';

import { BackendTweet } from './backend-tweet';

describe('BackendTweet', () => {
  let service: BackendTweet;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendTweet);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
