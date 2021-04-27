import { TestBed } from '@angular/core/testing';

import { ManageTestService } from './manage-test.service';

describe('ManageTestService', () => {
  let service: ManageTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
