import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNavBar } from './student-nav-bar';

describe('StudentNavBar', () => {
  let component: StudentNavBar;
  let fixture: ComponentFixture<StudentNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentNavBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
