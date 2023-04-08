import { TestBed } from '@angular/core/testing';

import { ShowIconInterceptor } from './show-icon.interceptor';

describe('ShowIconInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ShowIconInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ShowIconInterceptor = TestBed.inject(ShowIconInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
