import { BestEffortsModule } from './best-efforts.module';

describe('BestEffortsModule', () => {
  let bestEffortsModule: BestEffortsModule;

  beforeEach(() => {
    bestEffortsModule = new BestEffortsModule();
  });

  it('should create an instance', () => {
    expect(bestEffortsModule).toBeTruthy();
  });
});
