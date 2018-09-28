import { LibreriaModule } from './libreria.module';

describe('LibreriaModule', () => {
  let libreriaModule: LibreriaModule;

  beforeEach(() => {
    libreriaModule = new LibreriaModule();
  });

  it('should create an instance', () => {
    expect(libreriaModule).toBeTruthy();
  });
});
