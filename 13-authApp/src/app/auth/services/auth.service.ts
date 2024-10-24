import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;

  private http = inject( HttpClient );

  private _currentUser = signal<User|null>( null );
  private _authStatus = signal<AuthStatus>( AuthStatus.checking );

  //! Al mundo esterior
  public currentUser = computed( () => this._currentUser() );
  public AuthStatus = computed( () => this._authStatus() );


  constructor() { }

  login( email: string, password: string ): Observable<boolean>{

    const url = `${ this.baseUrl }/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>( url, body )
    .pipe(
      tap( ({ user, token }) => this.setAuthentication( user, token ) ),
      map( () => true ),

      //Todo errores

      catchError( err => throwError( () => err.error.message ))
    );
  }

  checkAuthService(): Observable<boolean>{

    const url = `${ this.baseUrl }/auth/check-token`;
    const token = localStorage.getItem('token');

    if ( !token ) return of (false);

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${ token }`);

    return this.http.get<CheckTokenResponse>(url, { headers })
    .pipe(
      map(({ user, token }) => this.setAuthentication( user, token )),
      catchError( () => {
        this._authStatus.set( AuthStatus.authenticated );
        return of( false );
      })
    )
  }


  private setAuthentication( user: User, token: string): boolean {
    this._currentUser.set( user );
    this._authStatus.set( AuthStatus.authenticated );
    localStorage.setItem( 'token', token );
    return true;
  }
}
