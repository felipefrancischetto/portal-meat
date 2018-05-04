import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Alimento } from '../models/models';

import { API } from './../app.api';
import { ErrorHandler } from '../app.error-hander';

@Injectable()
export class AlimentoService {

  constructor(private http: Http) { }

  getAlimentos(): Observable<Alimento[]> {
    return this.http.get(`${API}/alimentos`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  alimentoById(id: string): Observable<Alimento> {
    return this.http.get(`${API}/alimentos/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

  newAlimento(alimento): Observable<Alimento> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${API}/alimentos`, JSON.stringify(alimento),
                          new RequestOptions({ headers: headers }))
                          .map(res => res.json());
  }

  removeAlimento(id: string): Observable<Alimento> {
    return this.http.delete(`${API}/alimentos/${id}`)
      .map(res => res.json())
      .catch(ErrorHandler.handleError);
  }

}
