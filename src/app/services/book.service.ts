import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Book from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'http://localhost:8000/api/books'
  //Mettre le token d'authentification ici
  // private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjA3ODUwOTYsImV4cCI6MTcyMDc4ODY5Niwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGJvb2thcGkuY29tIn0.Kje0AsV3vIYbJrOTvBLs5tr4dsECkqyfPn9O_RBd2CzP3RnnhJ4UrW7DQd_hnN7wj-dpH-o-kerWZn3kdkwW8WDN_QZSSfMFefT-xQQn2dBy0EFKZ_FnXusgsGk7e9p8iXFIZ8XGWLv9UDBCeDDUZqGLA8ctyh7yUUn7yKZeGZBkuuqI6_uSrG4N6Sp3bIn9d7TIRBY4zEaaEN-pbbxrolKfoiG5v97hqa6YDyCW1idsod31_Z1gPM3Gc7nZ4YZFAgJ1CjNCC799Ail9mmsnlN51x13vCNuMnG4-KyeWfX86Rqduex6B41ZQx_AmJ0K_Di5l_P9yf1Mwhi7emvA2YtGZ5sH8FhSTndqDsB7JeX4YXOKhyy8d1dKC1pZ3-I3LsoLCdelrur2_QOuR5PMHnKGAGBb6Od9crB6D0ORO77IABaVDKFXs5cA2EswIPN9EVMMynwhbgqhirK0XBnSErd-ilo1DD4G89kioM_DKoo1aStyOux9cANh5uRe3nx3BzOFfsr9NMffHFkzNxILeM6-7JS_tHtsRcbyG58GQci94ZTRMe3Dpgr5w05uE_qxR4vIyyQtDXYlQOLapFgCCvcyf9JAAUqDnNLEflVbj9DNo70-MNQgTHYXbTN8J0s26CHanmAJopi_2Z1rNz0gwidO9Fq-sEAPl8VNL6YkdWM0';

  constructor(private httpClient: HttpClient) { }

  // private getAuthHeaders() {
  //   return {
  //     headers: new HttpHeaders({
  //       'Authorization': `Bearer ${this.authToken}`
  //     })
  //   };
  // }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.apiUrl}`);
  }

  getBook(id: number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.apiUrl}/${id}`);
}

  addBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.apiUrl}`, book);
  }

  updateBook(book: Book): Observable<Book>{
    return this.httpClient.put<Book>(`${this.apiUrl}/${book.id}`, book);
  }

  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(`${this.apiUrl}/${id}`);
  }

}
