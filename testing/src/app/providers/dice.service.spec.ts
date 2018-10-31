import { TestBed } from '@angular/core/testing';

import { DiceService } from './dice.service';

describe('DiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiceService = TestBed.get(DiceService);
    expect(service).toBeTruthy();
  });


  it('throwResult allways less than 7', () => {
    const service: DiceService = TestBed.get(DiceService);
    expect(service.throwResult()).toBeLessThan(7);
  });

});
