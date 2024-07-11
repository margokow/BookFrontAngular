import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8000/api/books'

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.apiUrl}`)
  }

  getBook(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.apiUrl}/${id}`)
}

  addBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.apiUrl}`, book)
  }

  updateBook(book: Book): Observable<Book>{
    return this.httpClient.put<Book>(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(`${this.apiUrl}/${id}`)
  }

}
