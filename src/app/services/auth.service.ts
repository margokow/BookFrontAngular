import { TokenService } from './token.service';
import { IAuth } from './../interfaces/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IToken } from './../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:8000/api/login_check"

  tokenService = inject(TokenService)
  decodedToken = inject(TokenService).decodeToken()

  constructor(private http: HttpClient) { }

  login(auth: IAuth): Observable<IToken>{
      return this.http.post<IToken>(`${this.apiUrl}`, auth);
  }

  isLoggedIn():boolean{
    return !! this.tokenService.getToken()
  }

  getRoles(value: string): boolean{
    if (this.decodedToken) {
      return this.decodedToken.roles.some((role: string)=> role === value)
    }
    return false
  }
}
