import { TestBed } from '@angular/core/testing';

import { GardenGridService } from './garden-grid.service';

describe('GardenGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GardenGridService = TestBed.get(GardenGridService);
    expect(service).toBeTruthy();
  });
});
