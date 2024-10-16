import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, tap } from 'rxjs';

import { AuthStatus, LoginResponse, User } from '../interfaces';


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
      tap( ({ user, token }) => {
        this._currentUser.set( user );
        this._authStatus.set( AuthStatus.authenticated );
        localStorage.setItem( 'token', token );
      }),
      map( () => true ),

      //Todo errores
    );
  }
}
