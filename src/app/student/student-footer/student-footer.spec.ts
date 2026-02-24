import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFooter } from './student-footer';

describe('StudentFooter', () => {
  let component: StudentFooter;
  let fixture: ComponentFixture<StudentFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
