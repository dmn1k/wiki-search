import { TestBed, inject } from '@angular/core/testing';

import { WikiSearchService } from './wiki-search.service';

describe('WikiSearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WikiSearchService]
    });
  });

  it('should be created', inject([WikiSearchService], (service: WikiSearchService) => {
    expect(service).toBeTruthy();
  }));
});
