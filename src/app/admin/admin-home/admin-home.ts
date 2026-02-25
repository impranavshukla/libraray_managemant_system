import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.css'
})

export class AdminHome implements OnInit {

  books = signal<any[]>([]);

  constructor(private bookService:AdminService){}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(){

    this.bookService.getBooks().subscribe((data:any)=>{

      this.books.set(data);

    });

  }

}