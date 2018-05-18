import 'rxjs/add/operator/do';

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../models/models';
import { API } from './../app.api';

@Injectable()
export class LoginService {

  private usuario: Usuario;

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    return this.usuario !== undefined;
  }

  login(username: string, password): Observable<Usuario> {
    return this.http.post<Usuario>(`${API}/login`,
      { username: username, password: password }
    ).do(usuario => this.usuario = usuario);
  }
}

