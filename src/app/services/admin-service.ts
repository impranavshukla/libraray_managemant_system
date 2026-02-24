import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url = "http://localhost:3000/admin-books";

  constructor(private http:HttpClient) { }

  
  getBooks(){

    return this.http.get(this.url);

  }

  addBook(data: any) {
    return this.http.post(this.url, data);
  }

  getDeleteBook(id: any) {
    return this.http.delete(this.url + "/" + id);
  } 




}
