import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from './../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class UsuarioService {

  constructor(private http: Http) { }

  newUsuario(usuario: Usuario): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${API}/usuarios`, JSON.stringify(usuario),
                          new RequestOptions({ headers: headers }))
                          .map(res => res.json())
                          .catch(ErrorHandler.handleError);
  }

}

