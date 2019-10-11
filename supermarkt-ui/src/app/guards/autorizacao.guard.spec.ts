import { TestBed, async, inject } from '@angular/core/testing';

import { AutorizacaoGuard } from './autorizacao.guard';

describe('AutorizacaoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutorizacaoGuard]
    });
  });

  it('should ...', inject([AutorizacaoGuard], (guard: AutorizacaoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
