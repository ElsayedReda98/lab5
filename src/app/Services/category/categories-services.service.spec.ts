import { TestBed } from '@angular/core/testing';

import { CategoriesServicesService } from './categories-services.service';

describe('CategoriesServicesService', () => {
  let service: CategoriesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
