import { TestBed } from '@angular/core/testing';

import { SubjectbelongstoService } from './subjectbelongsto.service';

describe('SubjectbelongstoService', () => {
  let service: SubjectbelongstoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectbelongstoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
