import { authGuard } from './../../../../practice/src/app/auth-guard';
import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';


describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});