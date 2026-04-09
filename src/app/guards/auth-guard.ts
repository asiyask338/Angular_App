import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('loggedin')

  const router = inject(Router);

  if(isLoggedIn==='true')
  {
    return true
  }
  else{
    router.navigate(['/login'])
    return false
  }

};
