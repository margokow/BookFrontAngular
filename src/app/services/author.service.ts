import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:8000/api/authors'

  constructor(private httpClient: HttpClient) { }

  getAuthors(): Observable<Author[]>{
    return this.httpClient.get<Author[]>(`${this.apiUrl}`)
  }

  getAuthor(id: number): Observable<Author>{
    return this.httpClient.get<Author>(`${this.apiUrl}${id}`)
}

  addAuthor(author: Author): Observable<Author>{
    return this.httpClient.post<Author>(`${this.apiUrl}`, author)
  }

  updateAuthor(author: Author): Observable<Author>{
    return this.httpClient.put<Author>(`${this.apiUrl}/${author.id}`, author);
  }
  deleteAuthor(id: number): Observable<Author>{
    return this.httpClient.delete<Author>(`${this.apiUrl}${id}`)
  }

}
