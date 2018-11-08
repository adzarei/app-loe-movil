import { TestBed } from '@angular/core/testing';

import { LoeServerService } from './loeServer.service';

describe('LoeServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoeServerService = TestBed.get(LoeServerService);
    expect(service).toBeTruthy();
  });
});
