import { TestBed } from '@angular/core/testing';

import { WelcomedataService } from './welcomedata.service';

describe('WelcomedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomedataService = TestBed.get(WelcomedataService);
    expect(service).toBeTruthy();
  });
});
