import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-student-my-books',
  imports: [CommonModule],
  templateUrl: './student-my-books.html',
  styleUrl: './student-my-books.css',
})
export class StudentMyBooks {
  constructor(private http: HttpClient) {}
  myBooks=signal<any[]>([]);

  loadMyBooks() {
    this.http.get<any[]>(
      `http://localhost:3000/borrowRecords?userId=1&_expand=book`
    )
      .subscribe((data: any) => {
        console.log(data)
        this.myBooks.set(data);
      });
  }
}
