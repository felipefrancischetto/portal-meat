

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../models/models';
import { API } from './../app.api';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoginService {

  private usuario: Usuario;

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return this.usuario !== undefined;
  }

  login(username: string, password): Observable<Usuario> {
    return this.http.post<Usuario>(`${API}/login`, { username: username, password: password })
      .pipe(
        tap(usuario => this.usuario = usuario)
      );
  }
}

