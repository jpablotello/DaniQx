import { TestBed } from '@angular/core/testing';

import { CofiasService } from './cofias.service';

describe('CofiasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CofiasService = TestBed.get(CofiasService);
    expect(service).toBeTruthy();
  });
});
