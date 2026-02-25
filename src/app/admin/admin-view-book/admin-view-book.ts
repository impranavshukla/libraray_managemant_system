import { Component, signal, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-view-book',
  templateUrl: './admin-view-book.html',
  styleUrls: ['./admin-view-book.css'],
})
export class AdminViewBook implements OnInit {

  books = signal<any[]>([]); 

  constructor(private bookService: AdminService, private router:Router) {}

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

  editBook(id:any){
 this.router.navigate(['/admin-edit-book',id]);
}

}