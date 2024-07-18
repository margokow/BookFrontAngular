import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  router = inject(Router)

  constructor() { }

  saveToken(token: string): void{
    sessionStorage.setItem('token', token)
  }

  getToken(): string | null {
    return sessionStorage.getItem('token')

}

decodeToken(): any {
  const token = this.getToken()
  if (token){
    const decodedToken = jwtDecode(token)
    return decodedToken;
  }
  return null
}

clearToken():void{
  sessionStorage.removeItem('token')
  this.router.navigate(['login'])
}
}
