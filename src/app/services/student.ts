import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Student {
  constructor(private http:HttpClient){}

  getBooks(){
    return this.http.get('http://localhost:3000/books');
  }
}
