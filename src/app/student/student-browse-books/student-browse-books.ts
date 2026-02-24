import { Component, signal } from '@angular/core';
import { Student } from '../../services/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-browse-books',
  imports: [CommonModule],
  templateUrl: './student-browse-books.html',
  styleUrl: './student-browse-books.css',
})
export class StudentBrowseBooks {
  constructor(private studentService:Student){}
bookList = signal<any[]>([]);

ngOnInit(){
  this.getBooksData();
}

getBooksData(){
  this.studentService.getBooks().subscribe((data: any) => {
    console.log(data);
    this.bookList.set(data);
  });
}
}
