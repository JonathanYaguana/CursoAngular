import { CanActivateFn, CanMatchFn, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

const checkAuthStatus = (): Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
  .pipe(
    tap( isAuthenticated => console.log('Authenticated: ', isAuthenticated)),
    tap( isAuthenticated => {
      if( !isAuthenticated ) {
        router.navigate(['./auth/login']);
      }
    })
  );
}

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>{
  return checkAuthStatus();
}


export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
}
