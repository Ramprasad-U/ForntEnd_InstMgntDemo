import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAttendancedetailsComponent } from './show-attendancedetails.component';

describe('ShowAttendancedetailsComponent', () => {
  let component: ShowAttendancedetailsComponent;
  let fixture: ComponentFixture<ShowAttendancedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAttendancedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAttendancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
