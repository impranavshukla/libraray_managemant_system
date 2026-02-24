import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddBook } from './admin-add-book';

describe('AdminAddBook', () => {
  let component: AdminAddBook;
  let fixture: ComponentFixture<AdminAddBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
