import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-add-book.html',
styleUrl: './admin-add-book.css'
})
export class AdminAddBook {

  constructor(
    private bookService: AdminService,
    private router: Router
  ) {}

  
  bookForm = new FormGroup({

    title: new FormControl(''),
    author: new FormControl(''),
    category: new FormControl(''),
    quantity: new FormControl(''),
    image: new FormControl('')

  });


  addBook(){

    this.bookService.addBook(this.bookForm.value).subscribe(()=>{

      alert("Book Added Successfully 📚");

      this.router.navigate(['/admin/home']);

    });

  }

}