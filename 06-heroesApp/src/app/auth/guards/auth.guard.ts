import { CanActivateFn, CanMatchFn, ActivatedRouteSnapshot, RouterStateSnapshot, Route, UrlSegment } from '@angular/router';

export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>{

  console.log('CanActivate');
  console.log({route, state});

  return false;
}


export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {

  console.log('CanActivate');
  console.log({route, segments});
  return false;
}
