import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HarryPotter } from './harry-potter';

describe('HarryPotter', () => {
  let service: HarryPotter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(HarryPotter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
