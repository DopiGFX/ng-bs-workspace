import { TestBed } from '@angular/core/testing';

import { NgBsComponentsService } from './ng-bs-components.service';

describe('NgBsComponentsService', () => {
  let service: NgBsComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgBsComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
