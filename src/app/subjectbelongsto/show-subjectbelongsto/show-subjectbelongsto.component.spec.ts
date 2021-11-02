import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubjectbelongstoComponent } from './show-subjectbelongsto.component';

describe('ShowSubjectbelongstoComponent', () => {
  let component: ShowSubjectbelongstoComponent;
  let fixture: ComponentFixture<ShowSubjectbelongstoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubjectbelongstoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubjectbelongstoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
