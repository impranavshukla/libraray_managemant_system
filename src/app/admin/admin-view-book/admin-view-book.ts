import { Component, signal, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-admin-view-book',
  templateUrl: './admin-view-book.html',
  styleUrls: ['./admin-view-book.css'],
})
export class AdminViewBook implements OnInit {

  books = signal<any[]>([]); 

  constructor(private bookService: AdminService) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data: any) => {
      this.books.set(data);
    });
  }

  deleteBook(id: any) {
    
      this.bookService.getDeleteBook(id).subscribe(() => {
        alert("Book Deleted Successfully 📚");
        this.loadBooks();
      });
    
  }
}