import { TestBed } from '@angular/core/testing';

import { AttendancedetailsService } from './attendancedetails.service';

describe('AttendancedetailsService', () => {
  let service: AttendancedetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendancedetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
