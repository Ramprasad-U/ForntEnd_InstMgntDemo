import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectbelongstoComponent } from './subjectbelongsto.component';

describe('SubjectbelongstoComponent', () => {
  let component: SubjectbelongstoComponent;
  let fixture: ComponentFixture<SubjectbelongstoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectbelongstoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectbelongstoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
