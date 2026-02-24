import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBrowseBooks } from './student-browse-books';

describe('StudentBrowseBooks', () => {
  let component: StudentBrowseBooks;
  let fixture: ComponentFixture<StudentBrowseBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentBrowseBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentBrowseBooks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
