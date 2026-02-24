import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyBooks } from './student-my-books';

describe('StudentMyBooks', () => {
  let component: StudentMyBooks;
  let fixture: ComponentFixture<StudentMyBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMyBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentMyBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
