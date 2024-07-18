import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const isLoggedIn = inject(AuthService).isLoggedIn()
  const getRoles = inject(AuthService).getRoles("ROLE_ADMIN")
  const router = inject(Router)

  if (isLoggedIn && getRoles) {
    return true;
  } else {
    router.navigateByUrl('login')
    return false
  }
};
