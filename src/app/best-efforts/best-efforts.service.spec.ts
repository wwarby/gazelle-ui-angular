import { TestBed, inject } from '@angular/core/testing';

import { BestEffortsService } from './best-efforts.service';
import { TestsModule } from '../shared/tests.module';

describe('BestEffortsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestsModule],
      providers: [BestEffortsService]
    });
  });

  it('should be created', inject([BestEffortsService], (service: BestEffortsService) => {
    expect(service).toBeTruthy();
  }));
});
