import { TestBed } from '@angular/core/testing';
import { SkimmerSearch } from './skimmer-search';

describe('SkimmerSearch', () => {
  let service: SkimmerSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkimmerSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
