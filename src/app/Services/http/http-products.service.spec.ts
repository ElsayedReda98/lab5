import { TestBed } from '@angular/core/testing';

import { HttpProductsService } from './http-products.service';

describe('ProductsService', () => {
  let service: HttpProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
