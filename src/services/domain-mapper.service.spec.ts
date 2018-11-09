import { TestBed } from '@angular/core/testing';

import { DomainMapperService } from './domain-mapper.service';

describe('DomainMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomainMapperService = TestBed.get(DomainMapperService);
    expect(service).toBeTruthy();
  });
});
