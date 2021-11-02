import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentInfoComponent } from './show-student-info.component';

describe('ShowStudentInfoComponent', () => {
  let component: ShowStudentInfoComponent;
  let fixture: ComponentFixture<ShowStudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
