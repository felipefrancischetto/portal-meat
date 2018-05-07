import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from './../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${API}/usuarios`);
  }

  newUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${API}/usuarios`, usuario);
  }

}

