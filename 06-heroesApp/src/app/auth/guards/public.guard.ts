import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment } from "@angular/router";
import { Observable, map, of, tap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";

const publicGuard = (): Observable<boolean> => {

  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkAuthentication()
  .pipe(
    tap( isAuthenticated => console.log('guard ', !isAuthenticated)),
    tap( isAuthenticated => {
      if ( isAuthenticated ) {
        router.navigate(['./'])
      }
    }),
    map( isAuthenticated => !isAuthenticated )
  )
}

export const canActivateGuardPublic: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>{
  return publicGuard();
}

export const canMatchGuardPublic: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return publicGuard();
}
