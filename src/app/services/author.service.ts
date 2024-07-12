import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Author from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private apiUrl = 'http://localhost:8000/api/authors'

  private authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MjA3ODUwOTYsImV4cCI6MTcyMDc4ODY5Niwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGJvb2thcGkuY29tIn0.Kje0AsV3vIYbJrOTvBLs5tr4dsECkqyfPn9O_RBd2CzP3RnnhJ4UrW7DQd_hnN7wj-dpH-o-kerWZn3kdkwW8WDN_QZSSfMFefT-xQQn2dBy0EFKZ_FnXusgsGk7e9p8iXFIZ8XGWLv9UDBCeDDUZqGLA8ctyh7yUUn7yKZeGZBkuuqI6_uSrG4N6Sp3bIn9d7TIRBY4zEaaEN-pbbxrolKfoiG5v97hqa6YDyCW1idsod31_Z1gPM3Gc7nZ4YZFAgJ1CjNCC799Ail9mmsnlN51x13vCNuMnG4-KyeWfX86Rqduex6B41ZQx_AmJ0K_Di5l_P9yf1Mwhi7emvA2YtGZ5sH8FhSTndqDsB7JeX4YXOKhyy8d1dKC1pZ3-I3LsoLCdelrur2_QOuR5PMHnKGAGBb6Od9crB6D0ORO77IABaVDKFXs5cA2EswIPN9EVMMynwhbgqhirK0XBnSErd-ilo1DD4G89kioM_DKoo1aStyOux9cANh5uRe3nx3BzOFfsr9NMffHFkzNxILeM6-7JS_tHtsRcbyG58GQci94ZTRMe3Dpgr5w05uE_qxR4vIyyQtDXYlQOLapFgCCvcyf9JAAUqDnNLEflVbj9DNo70-MNQgTHYXbTN8J0s26CHanmAJopi_2Z1rNz0gwidO9Fq-sEAPl8VNL6YkdWM0';

  constructor(private httpClient: HttpClient) { }

  private getAuthHeaders() {
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authToken}`
      })
    };
  }

  getAuthors(): Observable<Author[]>{
    return this.httpClient.get<Author[]>(`${this.apiUrl}`);
  }

  getAuthor(id: number): Observable<Author>{
    return this.httpClient.get<Author>(`${this.apiUrl}/${id}`);
}

  addAuthor(author: Author): Observable<Author>{
    return this.httpClient.post<Author>(`${this.apiUrl}`, author);
  }

  updateAuthor(author: Author): Observable<Author>{
    return this.httpClient.put<Author>(`${this.apiUrl}/${author.id}`, author);
  }
  deleteAuthor(id: number): Observable<Author>{
    return this.httpClient.delete<Author>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

}
