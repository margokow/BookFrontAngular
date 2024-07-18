import { TokenService } from './../services/token.service';
import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

  const tokenService = inject(TokenService)
  const token = tokenService.getToken()

  if (!token) {
    return next(req)
  }

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  })

  const newReq = req.clone({
    headers
  })

  return next(newReq)
}
