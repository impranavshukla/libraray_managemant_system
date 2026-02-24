import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBook } from './admin-view-book';

describe('AdminViewBook', () => {
  let component: AdminViewBook;
  let fixture: ComponentFixture<AdminViewBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
